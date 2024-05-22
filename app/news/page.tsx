import Banner from "@components/banner"
import StoryScroll from "@components/story_scroll"
import client from "../sanity"

export default async function NewsPage() {
    const data = await getNews()
    console.log(data)
    return (
        <main>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                <Banner />
                <StoryScroll stories={data} />
            </div>
        </main>
    )
}

async function getNews() {
    const data = await client.fetch(`*[_type == "story" && tags == "news"] | order(_createdAt desc) {
        title,
        "imgUrl": poster.asset->url,
        slug
    }`)

    return data
}

export const revalidate = 60;