import Banner from "@components/banner"
import StoryScroll from "@components/story_scroll"
import fetchStories from '../helpers/fetchStories'

export default async function NewsPage() {
    const data = await fetchStories('news')
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

export const revalidate = 60;