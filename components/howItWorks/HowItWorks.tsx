import BaseButton from '../baseButton/BaseButton';
import styles from './HowItWorks.module.scss'

const HowItWorks = () => {
    return (
        <div className={styles.container}>
            <div className={styles.elements}>
                <div>
                    <h2>Comment ça  marche ?</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <BaseButton text='En savoir plus' customStyle={{ fontSize: '16px', fontWeight: '500', maxWidth: "165px" }} />
                </div>
                <img src='/img/cartes-themes.png' />
            </div>
        </div>
    );
}

export default HowItWorks;