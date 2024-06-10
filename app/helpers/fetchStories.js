import client from '../sanity'

async function getFeaturedStories(filter) {
  if (filter != null) {
    const data = await client.fetch(`*[_type == "story" && tags == "${filter}"] | order(_createdAt desc) {
        title,
        "imgUrl": poster.asset->url,
        tags,
        publishedAt,
        publishedBy,
        "slug": slug.current
    }`, {}, {next: {revalidate: 60}})

    return data
  } else {
    const data = await client.fetch(`*[_type == "story"] | order(_createdAt desc) {
      title,
      "imgUrl": poster.asset->url,
      tags,
      publishedAt,
      publishedBy,
      "slug": slug.current
  }`, {}, {next: {revalidate: 60}})

  return data
  }
}

async function getStoryBySlug(slug) {
  const story = await client.fetch(`*[_type == "story" && slug.current=='${slug}']{
    title,
    body,
    gallery[] {
      "url": asset->url,
      caption
    },
    publishedBy,
    publishedAt,
    "imageUrl": poster.asset->url
  }` , {}, {next: {revalidate: 60}})
  return story
}

export default {getFeaturedStories, getStoryBySlug}