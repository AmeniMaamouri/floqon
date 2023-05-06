import BaseButton from '../baseButton/BaseButton';
import styles from './Navbar.module.scss'
import { AiOutlineMenu } from 'react-icons/ai'
import useDrawer from '@/hooks/useDrawer';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'


const Navbar = () => {

    const { isOpen, toggleDrawer } = useDrawer()

    return (
        <>
            <div className={styles.container}>

                <div className={styles.logo}>
                    <AiOutlineMenu onClick={toggleDrawer} className={styles.iconOpenDrawer} />
                    <a href='/'><img src='/img/logo.svg' /></a>
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
                    <img style={{ cursor: 'pointer' }} src='/img/basket.svg' />
                    <BaseButton customStyle={{ width: "144px", maxWidth: '144px', fontSize: '16px', fontWeight: '500' }} text='Boutique' />
                </div>



            </div>
            <div>
                {/* Drawer for responsive mobile */}
                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction='left'
                    className={styles.drawer}

                >
                    <div className={styles.items}>
                        <a href='/'>Accueil</a>
                        <a href='/'>À propos</a>
                        <a href='/'>Soutiens</a>
                        <a href='/'> Blog</a>
                        <a href='/'>FAQ</a>
                        <a href='/'>Contact</a>
                        <div className={styles.buttons} >
                            <a href='/'>Panier</a>
                            <a href='/'>Boutique</a>
                        </div>
                    </div>
                </Drawer>

                {/* Drawer for responsive mobile */}
            </div>
        </>
    );
}

export default Navbar;