import styles from './featuredPodcasts.module.css'
import Image from 'next/image'
import Podcast from './embeddedPodcast'
import Show from './podcastShows'

export default function FeaturedPodcasts() {
    return(
        <div>
            <h1 className={styles.title}>Our Shows</h1>
            <hr></hr>
            {/* Replace these images with featuredPodcast components that include title and show host */}
            <div className={styles.featContainer}>
                <Show title='Sports Ball' host='Sydney'/>
                <Show title='Politics' host='Sydney'/>
                <Show title='Events' host='Sydney'/>
                <Show title='Random Stuff' host='Sydney'/>
            </div>

            <h1 className={styles.title}>Recent Episodes</h1>
            <hr></hr>
        </div>
    )
}