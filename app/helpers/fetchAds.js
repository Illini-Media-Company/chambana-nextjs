import client from '../sanity'

async function getFeaturedAds(slice1, slice2) {
    const revalidate = 60; // will you really need to revalidate ads this often?
    if (slice1 != null && slice2 != null) {
        const groq = `*[_type == 'ad'] | order(_createdAt asc) [${slice1}..${slice2}] {
            "imgUrl": ad.asset->url,
            ad,
            href,
            _id
        }`
        const data = await client.fetch(groq, {}, {next: {revalidate: revalidate}}).then(console.log('success')).catch(err => {console.log('error', err)});
        return data;
    } else {
        const groq = `*[_type == 'ad'] | order(_createdAt asc) [0..1] {
            "imgUrl": ad.asset->url,
            ad,
            href,
            _id
        }`
        const data = await client.fetch(groq, {}, {next: {revalidate: revalidate}}).then(console.log('success')).catch(err => {console.log('error', err)});
        return data;
    }
}
  

async function getPageAds() {
    const revalidate = 60;
    const groq = `*[_type == 'page-ad'] | order(_createdAt asc) {
        "imgUrl": ad.asset->url,
        ad,
        href,
        _id
    }`;
    const data = await client.fetch(groq, {}, {next: {revalidate: revalidate}}).then(console.log('success')).catch(err => {console.log('error', err)});
    return data;
}

async function getBannerAds() {
    const revalidate = 60;
    const groq = `*[_type == 'banner-ad'] | order(_createdAt asc){
        "imgUrl": ad.asset->url,
        ad,
        href,
        _id
    }`
    const data = await client.fetch(groq, {}, {next: {revalidate: revalidate}}).then(console.log('success')).catch(err => {console.log('error', err)});
    return data;
}

export default {getFeaturedAds, getPageAds, getBannerAds}