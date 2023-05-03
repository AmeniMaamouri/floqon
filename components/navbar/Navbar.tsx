import BaseButton from '../baseButton/BaseButton';
import styles from './Navbar.module.scss'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src='/img/logo.svg' />
            </div>
            <div className={styles.items}>
                <a href='/'>Accueil</a>
                <a href='/'>À propos</a>
                <a href='/'>Soutiens</a>
                <a href='/'> Blog</a>
                <a href='/'>FAQ</a>
                <a href='/'>Contact</a>
            </div>
            <div className={styles.buttons}>
                <img src='/img/basket.svg' />
                <BaseButton customStyle={{ width:"144px", maxWidth: '144px', fontSize: '16px', fontWeight: '500' }} text='Boutique' />
            </div>
        </div>
    );
}

export default Navbar;