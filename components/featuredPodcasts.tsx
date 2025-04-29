import styles from './featuredPodcasts.module.css'
import Image from 'next/image'
import Podcast from './embeddedPodcast'
import Show from './podcastShows'
import PodcastCarousel from './PodcastCarousel'
import {showItems} from '@/app/podcastShows'
import { EmblaOptionsType } from 'embla-carousel';
import EmblaCarousel from './EmblaCarousel'
import { ShowItem } from '@/types/showItem';
import fetchPodcasts from '@/app/helpers/fetchPodcasts'

export default async function FeaturedPodcasts() {
    const OPTIONS: EmblaOptionsType = { loop: true };
    const shows: ShowItem[] = await fetchPodcasts.getPodcastShows()

    const episodes = await fetchPodcasts.getLatestPodcastEpisodes()
    console.log(episodes)
    return(
        <div>
            <h1 className={styles.title}>Our Shows</h1>
            <hr></hr>
            {/* Replace these images with featuredPodcast components that include title and show host */}
            <div className={styles.featContainer}>
                {/* {showItems &&
                    showItems.map((show: ShowItem, index: number) => (
                        <Show key={index} title={show.title} host={show.host} image={show.imgUrl} href={show.href} />
                    ))} */}

                {shows.map((show, index: number) => (
                    <Show 
                        key={index} 
                        title={show.title} 
                        host={show.host} 
                        image={show.imgUrl} 
                        href={show.href} 
                    />
                ))}
            </div>
            <div className={styles.mobile}>
                <PodcastCarousel slides={shows} options={OPTIONS}/>
            </div>

            <h1 className={styles.title}>Recent Episodes</h1>
            <hr></hr>

            
        </div>
    )
}