'use client'
import {useState, useEffect, useRef, useCallback} from 'react'
import styles from './embeddedPodcast.module.css';
import Image from 'next/image';
import { FaFontAwesome, FaPlayCircle } from 'react-icons/fa';
import { FaCircleStop } from 'react-icons/fa6';
import { FaVolumeUp } from 'react-icons/fa';
import { FaVolumeMute } from 'react-icons/fa';
import Link from 'next/link'
import WaveSurfer from 'wavesurfer.js'

export default function Podcast() {
    const [playing, setPlaying] = useState(false); 
    const [volume, setVolume] = useState(1);
    const [loaded, setLoaded] = useState(false);
    const [waver, setWaver] = useState(null);
    const el = useRef();

    const audioRef = useRef<HTMLAudioElement>(null);
    const volumeRef = useRef<HTMLInputElement>(null);

    const waveformRef = useRef(null);
    const wavesurfer = useRef(null);

    useEffect(() => {
        create();

        return () => {
            if (wavesurfer.current) {
                wavesurfer.current.destroy(); 
            }
        }
      }, []);

    const handlePlayPause = () => {
        setPlaying(!playing);
        wavesurfer.current.playPause();
    };

    const handleValueChange = (e: any) => {
        const volume = e.target.value;

        wavesurfer.current.setVolume(volume);
    }

    const create = async () => {
        wavesurfer.current = WaveSurfer.create({
            backend: 'MediaElement',
            container: waveformRef.current,
            waveColor: "#34374B",
            progressColor: "#ff6400",
            // url: "https://podcasts.captivate.fm/media/4bae19d2-ed73-48cf-9113-6541d6984934/NWS240509-mixdown.mp3",
            dragToSeek: true,
            fillParent: true,
            // width: "12vw",
            height: 64,
            hideScrollbar: true,
            normalize: true,
            // barGap: 1,
            barHeight: 20,
            barRadius: 20,
            // barWidth: 5,
        })

        wavesurfer.current.load("/MiceonVenus.mp3")
    }
      
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
                            {playing ? <FaCircleStop size={64} /> : <FaPlayCircle size={64} />}
                            {playing && !loaded ? '' : playing}
                            {playing && loaded}
                        </button>
                        <div id="waveform" className={styles.waveform} ref={waveformRef} /> 
                    </div>
                    <input
                        className={styles.volumeSlider}
                        type="range"
                        ref={volumeRef}
                        value={volume}
                        onChange={(e) => {
                            setVolume(parseFloat(e.target.value));
                            handleValueChange(e);
                        }}
                        min="0"
                        max="1"
                        step="0.01"
                    />
                    <p>This is the description of the podcast that will be displayed here. it's supposed to be pretty long so... ipsum lorem dolores umbridge dolore</p>
                </div>
            </div>
        </div>
    )
}