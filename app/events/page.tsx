import Banner from "@components/banner"
import client from "../sanity"

export default async function EventsPage() {
    const data = await getEvents()
    console.log(data)
    return (
        <main>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
            <Banner />
            </div>
        </main>
    )
}

async function getEvents() {
    const data = await client.fetch(`*[_type == "story" && tags == "events"] {
        title,
        "imgUrl": poster.asset->url,
        slug
    }`)

    return data
}