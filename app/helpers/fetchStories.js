import client from '../sanity'

async function getFeaturedStories(filter) {
  if (filter != null) {
    let lastId = ' '
    const groq = `*[_type == "story" && tags == "${filter}"] | order(_createdAt desc) [0...20] {
        title,
        "imgUrl": poster.asset->url,
        poster,
        main,
        tags,
        publishedAt,
        publishedBy,
        _id,
        slug,
    }`

    const data = await client.fetch(groq, {lastId}, {next: {revalidate: 60}}).then(console.log('success')).catch(err => {console.log('error', err)});

    if (data.length > 0)
      lastId = data[data.length - 1]._id
    else
      lastId = null

    return data
  } else {
    const groq = `*[_type == "story"] | order(_createdAt desc) [0...50] {
        title,
        "imgUrl": poster.asset->url,
        poster,
        main,
        tags,
        publishedAt,
        publishedBy,
        _id,
        slug,
    }`
    const data = await client.fetch(groq, {}, {next: {revalidate: 60}}).then(console.log('success')).catch(err => {console.log('error', err)});

    return data
  }
}

async function getHomepageStories() {
  const [homepage, recentStories] = await Promise.all([
    client.fetch(`*[_type == "homePage"] | order(_updatedAt desc)[0]{
      "leadStory": leadStory->{
        title,
        poster,
        tags,
        publishedAt,
        publishedBy,
        _id,
        slug,
      },
      "featuredStories": featuredStories[]->{
        title,
        poster,
        tags,
        publishedAt,
        publishedBy,
        _id,
        slug,
      }
    }`, {}, {next: {revalidate: 60}}),
    client.fetch(`*[_type == "story"] | order(main desc, publishedAt desc)[0...50] {
      title,
      poster,
      main,
      tags,
      publishedAt,
      publishedBy,
      _id,
      slug,
    }`, {}, {next: {revalidate: 60}}),
  ]);

  const selectedStories = [homepage?.leadStory, ...(homepage?.featuredStories ?? [])];
  const seenStoryIds = new Set();

  return [...selectedStories, ...(recentStories ?? [])].filter((story) => {
    if (!story?._id || seenStoryIds.has(story._id)) return false;
    seenStoryIds.add(story._id);
    return true;
  });
}

async function getPaginatedStories(filter) {
  let lastId = ' '
  const groq = `*[_type == "story" && tags == "${filter}"] | order(publishedAt desc) [0...20] {
      title,
      "imgUrl": poster.asset->url,
      poster,
      main,
      tags,
      publishedAt,
      publishedBy,
      _id,
      slug,
  }`

  const data = await client.fetch(groq, {}, {next: {revalidate: 60}}).then(console.log('success')).catch(err => {console.log('error', err)});

  if (data.length > 0)
    lastId = data[data.length - 1].publishedAt
  else
    lastId = null

  return [data, lastId]
}

async function getStoryBySlug(slug) {
  const groq = `*[_type == "story" && slug.current=='${slug}']{
    title,
    body,
    gallery[] {
      "url": asset->url,
      caption
    },
    publishedBy,
    publishedAt,
    "imageUrl": poster.asset->url,
    poster,
    description
  }`
  let story;
  let success = false
  for (let i = 0; i < 3 && success == false; i++) {
    story = await client.fetch(groq, {}, {next: {revalidate: 60}});
    if (story != undefined) {
      success = true;
    }
    console.log(i);
  }
  // const story = await client.fetch(groq, {}, {next: {revalidate: 60}}).then(console.log('success')).catch(err => {console.log('error', err)});
  return story
}

// tags == "${filter}" &&
async function getNextPage(published, filter) {
  if (published == null) {
    return []
  }
  let lastId = ' ';
  const query = `*[_type == "story" && tags == "${filter}" && publishedAt < "${published}"] | order(publishedAt desc) [0...20] {
    title,
    "imgUrl": poster.asset->url,
    poster,
    main,
    tags,
    publishedAt,
    publishedBy,
    _id,
    slug,
  }`

  const result = await client.fetch(query, {}, {});

  if (result != null && result.length > 0 && result[(result.length - 1)] != null)
    lastId = result[result.length - 1].publishedAt
  else
    lastId = null;

  return [result, lastId];
}

async function getSearch(search) {
  let lastId = ' ';
  const query = `*[_type == "story" && title match "${search}*"] | order(publishedAt desc) [0...20] {
    title,
    "imgUrl": poster.asset->url,
    poster,
    main,
    tags,
    publishedAt,
    publishedBy,
    _id,
    slug,
  }` 

  const result = await client.fetch(query, {}, {next: {revalidate: 60}}).then(console.log('success')).catch(err => {console.log('error', err)});
  if (result != null && result.length > 0 && result[(result.length - 1)] != null)
    lastId = result[result.length - 1].publishedAt;
  else
    lastId = null

  return [result, lastId]
}

async function getSearchNext(search, published) {
  if (published == null) {
    return [];
  }

  let lastId = ' ';
  const query = `*[_type == "story" && title match "${search}*" && publishedAt < "${published}"] | order(publishedAt desc) [0...20] {
    title,
    "imgUrl": poster.asset->url,
    poster,
    main,
    tags,
    publishedAt,
    publishedBy,
    _id,
    slug,
  }`

  const result = await client.fetch(query, {}, {});
  if (result != null && result.length > 0 && result[(result.length - 1)] != null)
    lastId = result[result.length - 1].publishedAt;
  else 
    lastId = null

  return [result, lastId];
}
export default {getFeaturedStories, getHomepageStories, getStoryBySlug, getNextPage, getPaginatedStories, getSearch, getSearchNext}