import BaseButton from '../baseButton/BaseButton';
import styles from './Hero.module.scss'

const Hero = () => {
    return (
        <div className={styles.container}>
            <h1>Testez et enrichissez</h1>
            <h1><img className={styles.speedImg} src='/img/arrowHero.svg' /> votre vocabulaire</h1>
            <p className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in </p>
            <BaseButton text='Commander ici' customStyle={{ maxWidth: '314px', fontSize: "20px", fontWeight:'700' }} />
        </div>
    );
}

export default Hero;