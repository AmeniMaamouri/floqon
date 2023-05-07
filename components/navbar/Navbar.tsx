import BaseButton from '../baseButton/BaseButton';
import styles from './Navbar.module.scss'
import { AiOutlineMenu } from 'react-icons/ai'
import useDrawer from '@/hooks/useDrawer';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import Link from 'next/link';


const Navbar = () => {

    const { isOpen, toggleDrawer } = useDrawer()

    return (
        <>
            <div className={styles.container}>

                <div className={styles.logo}>
                    <AiOutlineMenu onClick={toggleDrawer} className={styles.iconOpenDrawer} />
                    <Link href='/'>  <img src='/img/logo.svg' alt="" /></Link>
                </div>
                <div className={styles.items}>
                    <Link href='/'>Accueil</Link>
                    <Link href='/a-propos'> À propos</Link>
                    <Link href='/soutiens'> Soutiens</Link>
                    {/* <Link>  <a href='/blog'> Blog</a></Link> */}
                    <Link href='/faq'> FAQ</Link>
                    <Link href='/contactez-nous'> Contact</Link>
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
                        <Link href='/'>Accueil</Link>
                        <Link href='/a-propos'> À propos</Link>
                        <Link href='/soutiens'> Soutiens</Link>
                        {/* <Link>  <a href='/blog'> Blog</a></Link> */}
                        <Link href='/faq'> FAQ</Link>
                        <Link href='/contactez-nous'> Contact</Link>
                        <div className={styles.buttons} >

                            <Link href=''> Panier</Link>
                            <Link href=''> Boutique</Link>

                        </div>
                    </div>
                </Drawer>

                {/* Drawer for responsive mobile */}
            </div>
        </>
    );
}

export default Navbar;