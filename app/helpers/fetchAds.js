import {createClient} from 'next-sanity'
import client from '../sanity'

export default async function getFeaturedAds() {
    const revalidate = 60; // will you really need to revalidate ads this often?
    const data = await client.fetch(
        `*[_type == 'ad'][0..1] {
        "imgUrl": ad.asset->url,
        href
    }`,
        { revalidate: { revalidate } }
    );
    return data;
}
  