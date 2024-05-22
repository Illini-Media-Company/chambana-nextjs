import Banner from "@components/banner"
import StoryScroll from "@components/story_scroll"
import client from "../sanity"

export default async function NewsPage() {
    return (
        <main>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                <Banner />
                <h1>About Page</h1>
            </div>
        </main>
    )
}