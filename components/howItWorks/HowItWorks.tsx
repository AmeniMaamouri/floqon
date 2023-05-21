import Link from 'next/link';
import BaseButton from '../baseButton/BaseButton';
import styles from './HowItWorks.module.scss'

const HowItWorks = () => {
    return (
        <div className={styles.container}>
            <div className={styles.elements}>
                <div>
                    <h2>Comment ça  marche ?</h2>
                    <p>Découvrez comment notre jeu révolutionnaire vous permettra d{"'"}améliorer votre vocabulaire
tout en vous amusant ! Cliquez ici pour découvrir comment ça marche et plongez dans une
aventure linguistique captivante.</p>
                    <Link href='/comment-ca-marche'><BaseButton text='En savoir plus' customStyle={{ fontSize: '16px', fontWeight: '500', maxWidth: "165px" }} /></Link>
                </div>
                <img src='/img/cartes-themes.png' />
            </div>
        </div>
    );
}

export default HowItWorks;