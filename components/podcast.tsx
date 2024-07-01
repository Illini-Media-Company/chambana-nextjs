'use client'
import {useState, useEffect, useRef} from 'react'
import styles from './podcast.module.css';
import Image from 'next/image'

export default function Podcast() {
    const [playing, setPlaying] = useState(false); 
    const [volume , setVolume] = useState(1);

    const audioRef = useRef<HTMLAudioElement>(null);
    const volumeRef = useRef<HTMLInputElement>(null);
      
    const handlePlayPause = () => {
        setPlaying(!playing);
        if (playing) {
            console.log('playing', playing);
        } else {
            console.log('not playing', playing);
        }
    };

    return (
        <div className={styles.podcastContainer}>
            <div className={styles.leftContainer}>
                <Image 
                    src={'/placeholder.webp'}
                    alt={'podcast image'}
                    height={300}
                    width={300}
                    className={styles.imageContainer}
                />
            </div>
            <div className={styles.rightContainer}>
                <div>
                    <h1>Featured Podcast</h1>
                    <div className={styles.playPauseContainer}>
                        <button className={styles.playButton} onClick={() => handlePlayPause()}>
                            {playing && 'playing'}
                            {!playing && 'not playing'}
                        </button>
                        <input
                            className={styles.volumeSlider}
                            type="range"
                            ref={volumeRef}
                            value={volume}
                            onChange={(e) => setVolume(parseFloat(e.target.value))}
                            min="0"
                            max="1"
                            step="0.01"
                        />
                    </div>
                    <p>This is the description of the podcast that will be displayed here. it's supposed to be pretty long so... ipsum lorem dolores umbridge dolore</p>
                </div>
            </div>
        </div>
    )
}