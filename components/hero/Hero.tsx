import styles from './Hero.module.scss'

const Hero = () => {
    return (
        <div className={styles.container}>
            <h1>Testez et enrichissez</h1>
            <h1><img src='/img/arrowHero.svg' /> votre vocabulaire</h1>
        </div>
    );
}

export default Hero;