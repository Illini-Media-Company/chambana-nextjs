import client from '../sanity'

async function getFeaturedStories(filter) {
  if (filter != null) {
    const groq = `*[_type == "story" && tags == "${filter}"] | order(_createdAt desc) {
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
  } else {
    const groq = `*[_type == "story"] | order(_createdAt desc) {
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

export default {getFeaturedStories, getStoryBySlug}