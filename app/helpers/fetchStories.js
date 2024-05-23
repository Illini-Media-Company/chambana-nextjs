import {createClient} from 'next-sanity'
import client from '../sanity'

export default async function getFeaturedStories(filter) {
  if (filter != null) {
    const data = await client.fetch(`*[_type == "story" && tags == "${filter}"] | order(_createdAt desc) {
        title,
        "imgUrl": poster.asset->url,
        tags,
        publishedAt,
        publishedBy,
        "slug": slug.current
    }`)

    return data
  } else {
    const data = await client.fetch(`*[_type == "story"] | order(_createdAt desc) {
      title,
      "imgUrl": poster.asset->url,
      tags,
      publishedAt,
      publishedBy,
      "slug": slug.current
  }`)

  return data
  }
}