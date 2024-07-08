import Image from 'next/image'
import styles from './podcastShows.module.css'

interface ShowProps {
    title: string
    host: string
    href?: string
    image?: string
    tags?: string[]
}

export default function Show({title, host, image, tags, href} : ShowProps) {
    return(
        <a className={styles.parentContainer} href={href}>
            <Image 
                src={image ? image : '/placeholder.webp'}
                alt={'podcast image'}
                width={250}
                height={250}
                className={styles.imageContainer}
            />
            <h1 className={styles.title}>{title}</h1>
            <h3>Hosted By: {host}</h3>
        </a>
    )
}