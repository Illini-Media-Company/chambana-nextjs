import client from '../sanity'

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


async function getNextPage(id, filter) {
  if (id == null) {
    return []
  }
  const groq = `[_type == "story" && tags == "${filter}" && _id>${id}][0...20] {
    title,
    "imgUrl": poster.asset->url,
    main,
    tags,
    publishedAt,
    publishedBy,
    _id,
    "slug": slug.current
  }`
  const {result} = await client.fetch(groq, {lastId})

  if (result.length > 0)
    lastId = result[result.length - 1]._id
  else
    lastId = null;

  return result;
}
export default {getFeaturedStories, getStoryBySlug, getNextPage}