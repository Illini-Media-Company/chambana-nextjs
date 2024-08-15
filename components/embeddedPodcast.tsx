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

interface PodcastProps {
    url: string
    description?: string
}

export default function Podcast({url, description}: PodcastProps) {
    const [playing, setPlaying] = useState(false); 
    const [volume, setVolume] = useState(1);
    const [loading, setLoading] = useState(true);
    const [loaded, setLoaded] = useState(false);
    const [waver, setWaver] = useState(null);
    const el = useRef();

    const audioRef = useRef<HTMLAudioElement>(null);
    const volumeRef = useRef<HTMLInputElement>(null);

    const waveformRef = useRef(null);
    const wavesurfer = useRef({} as WaveSurfer);

    useEffect(() => {
        create();

        return () => {
            try {
                if (wavesurfer.current) {
                    wavesurfer.current.destroy(); 
                }
            } catch (err) {
                console.log('Could not destroy current Wavesurfer element')
            }
        }
      }, []);

    const handlePlayPause = () => {
        setPlaying(!playing);

        if (wavesurfer.current)
            wavesurfer.current.playPause();
    };

    const handleValueChange = (e: any) => {
        const volume = e.target.value;

        if (wavesurfer.current)
            wavesurfer.current.setVolume(volume);
    }

    const create = async () => {
        if (waveformRef.current)
            wavesurfer.current = WaveSurfer.create({
                container: waveformRef.current,
                backend: 'MediaElement',
                waveColor: "#34374B",
                progressColor: "#ff6400",
                // url: "https://podcasts.captivate.fm/media/4bae19d2-ed73-48cf-9113-6541d6984934/NWS240509-mixdown.mp3",
                dragToSeek: true,
                fillParent: true,
                // width: "12vw",
                height: 75,
                hideScrollbar: true,
                normalize: true,
                // barGap: 1,
                barHeight: 20,
                barRadius: 20,
                // barWidth: 5,
            })
        try {
            if (wavesurfer.current)
                wavesurfer.current.load(url);
            setLoading(false);
        } catch (err) {
            console.log('Error in loading audio');
        }
    }
      
    return (
        <div className={styles.podcastContainer}>
            <div className={styles.leftContainer}>
                <Image 
                    src={'/wpgupodcast.png'}
                    alt={'podcast image'}
                    priority
                    height={300}
                    width={300}
                    className={styles.imageContainer}
                />
            </div>
            <div className={styles.rightContainer}>
                <div>
                    <h1>WPGU News Podcast</h1>
                    <div className={styles.playPauseContainer}>
                        <button className={styles.playButton} onClick={() => handlePlayPause()}>
                            {playing ? <FaCircleStop size={64} /> : <FaPlayCircle size={64} />}
                            {loading && "Loading..."}
                            {/* {playing && !loaded ? '' : playing} */}
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
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}