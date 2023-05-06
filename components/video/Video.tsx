import { useRef, useState } from 'react';
import styles from './Video.module.scss'
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Video = () => {
    const [isVideoPlays, setIsVideoPlays] = useState<boolean>(false)

    const handlePlayVideo = () => {
        setIsVideoPlays(true)
    }

    return (
        <div className={styles.container}>
            <h1>Présentation de Floqon</h1>
            <div className={styles.videoContainer}>
                <ReactPlayer className={styles.video} controls playing={isVideoPlays} url='https://www.youtube.com/embed/fVjQ9jHL1ss' />
                {!isVideoPlays && <img onClick={handlePlayVideo} className={styles.playBtn} src='/img/play.png' />}
            </div>
        </div>
    );
}

export default Video;