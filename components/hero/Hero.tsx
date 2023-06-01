import Image from 'next/image';
import BaseButton from '../baseButton/BaseButton';
import styles from './Hero.module.scss'

const Hero = () => {
    return (
        <div className={styles.container}>
            <h1>Testez et enrichissez</h1>
            <h1><img className={styles.speedImg} src='/img/arrowHero.svg' /> votre vocabulaire</h1>
            <p className={styles.description}>Plongez dans une expérience de jeux immersive qui allie plaisir et apprentissage ! Nos jeux
                ludiques sont conçus pour vous aider à améliorer votre vocabulaire tout en vous divertissant.
                Que vous soyez un débutant, un élève, un professionnel ou simplement un passionné de
                mots, cette application et ses divers jeux sont des incontournables.</p>

            <p className={styles.description}>Explorez des catégories variées, défiez vos amis ou votre famille, et découvrez qui sera le
                maître des mots ! Avec des illustrations captivantes et réalistes, une interface conviviale et
                des défis stimulants, nos jeux vous offrent une expérience de jeu inégalée.</p>

            <p className={styles.description}>Chaque partie est une occasion de développer votre mémoire, d{"'"}élargir votre vocabulaire et
                d{"'"}améliorer votre réflexion rapide. Que vous jouiez en solo ou en groupe, nos jeux sauront
                vous captiver et vous divertir pendant des heures.</p>
            <p className={styles.description}>Ne manquez pas cette opportunité d{"'"}acquérir Floqon, cette application qui allie plaisir et
                apprentissage de manière unique. Rendez-vous dès maintenant sur notre page boutique
                pour acheter votre premier jeu physique et commencez votre aventure linguistique dès aujourd{"'"}hui !</p>
            <BaseButton text='Commander ici' customStyle={{ maxWidth: '314px', fontSize: "20px", fontWeight: '700' }} />
            <div>
                <img className={styles.imgHero} alt="" src='/img/hero.png' />
            </div>
        </div>
    );
}

export default Hero;