import client from '../sanity'
import rearrangeStories from './sortStories'

async function getFeaturedStories(filter) {
  if (filter != null) {
    let lastId = ' '
    const groq = `*[_type == "story" && tags == "${filter}"] | order(_createdAt desc) [0...20] {
        title,
        "imgUrl": poster.asset->url,
        main,
        tags,
        publishedAt,
        publishedBy,
        _id,
        "slug": slug.current
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
        main,
        tags,
        publishedAt,
        publishedBy,
        _id,
        "slug": slug.current
    }`
    const data = await client.fetch(groq, {}, {next: {revalidate: 60}}).then(console.log('success')).catch(err => {console.log('error', err)});

    return data
  }
}

async function getPaginatedStories(filter) {
  let lastId = ' '
  const groq = `*[_type == "story" && tags == "${filter}"] | order(_createdAt desc) [0...20] {
      title,
      "imgUrl": poster.asset->url,
      main,
      tags,
      publishedAt,
      publishedBy,
      _id,
      "slug": slug.current
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
    "imageUrl": poster.asset->url
  }`
  const story = await client.fetch(groq, {}, {next: {revalidate: 60}}).then(console.log('success')).catch(err => {console.log('error', err)});
  return story
}

// tags == "${filter}" &&
async function getNextPage(published, filter) {
  if (published == null) {
    return []
  }
  let lastId = ' ';
  const query = `*[_type == "story" && tags == "${filter}" && publishedAt < "${published}"] | order(_createdAt desc) [0...20] {
    title,
    "imgUrl": poster.asset->url,
    main,
    tags,
    publishedAt,
    publishedBy,
    _id,
    "slug": slug.current
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
  const query = `*[_type == "story" && title match "${search}*"] | order(_createdAt desc) [0...20] {
    title,
    "imgUrl": poster.asset->url,
    main,
    tags,
    publishedAt,
    publishedBy,
    _id,
    "slug": slug.current
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
  const query = `*[_type == "story" && title match "${search}*" && publishedAt < "${published}"] | order(_createdAt desc) [0...20] {
    title,
    "imgUrl": poster.asset->url,
    main,
    tags,
    publishedAt,
    publishedBy,
    _id,
    "slug": slug.current
  }`

  const result = await client.fetch(query, {}, {});
  if (result != null && result.length > 0 && result[(result.length - 1)] != null)
    lastId = result[result.length - 1].publishedAt;
  else 
    lastId = null

  return [result, lastId];
}
export default {getFeaturedStories, getStoryBySlug, getNextPage, getPaginatedStories, getSearch, getSearchNext}