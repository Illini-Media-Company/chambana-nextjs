import client from '../sanity'

async function getPodcastShows() {
    const groq = `*[_type == "podcastShow"] | order(title asc) {
        title,
        host,
        "imgUrl": image.asset->url,
        href
    }`;
    
    try {
        const shows = await client.fetch(groq, { next: { revalidate: 60 } });
        console.log('Successfully fetched podcasts', shows);
        return shows;
    } catch (err) {
        console.error('Error fetching podcasts:', err);
        return [];
    }
}

async function getLatestPodcastEpisodes(count = 5) {
    const groq = `*[_type == "podcast"] | order(date desc) {
        title,
        date
    }[0...$countEp]`;

    try {
        const shows = await client.fetch(groq, { next: { revalidate: 60 }, countEp : count });
        console.log('Successfully fetched latest episode');
        return shows;
    } catch (err) {
        console.error('Error fetching latest episode:', err);
        return [];
    }
}

export default {getPodcastShows, getLatestPodcastEpisodes};