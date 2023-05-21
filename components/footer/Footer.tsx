import Link from 'next/link';
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footerWidget}>
                <div className={styles.firstWidget}>
                    <a className={styles.logoFooter} href=""><img src="/img/logo_footer.svg" alt="" /></a>
                    <div className={styles.socialMedia}>
                        <a href="https://www.facebook.com/profile.php?id=100087532885741"><img src="/img/facebook.svg" alt="" /></a>
                        <a href="https://www.instagram.com/floqon/"><img className={styles.iconSocialMedia} src="/img/instagram.svg" alt="" /></a>
                        <a href="https://www.youtube.com/channel/UCBXC-Yr2w_LudMZRnqB-zZA"><img className={styles.iconSocialMedia} src="/img/youtube.svg" alt="" /></a>
                        <a href="https://www.tiktok.com/@floqon"><img src="/img/tiktok.svg" alt="" /></a>
                    </div>
                </div>
                <div className={styles.secondWidget}>
                    <a href=""><p className={styles.titleWidget}>Informations</p></a>
                    <div className={styles.pp}>
                        <Link href="/conditions-generales">  <p className={styles.linkWidget}>Conditions Générales d{"'"}Utilisation</p></Link>
                        <Link href="/conditions-generales-de-vente"> <p className={styles.linkWidget}></p>Conditions Générales de Vente</Link>
                        <Link href="/mentions-legales"> <p className={styles.linkWidget}></p>Mentions Légales</Link>
                        <Link href="/utilisation-des-cookies">  <p className={styles.linkWidget}></p>Utilisation des cookies</Link>
                        <Link href="/politique-de-confidentialite"><p className={styles.linkWidget}></p>Politique de confidentialité</Link>
                    </div>
                </div>

                <div className={styles.thirddWidget}>
                    <a href=""><p className={styles.titleWidget}>Contactez-nous</p></a>
                    <a href=""><p className={styles.linkWidget}>Adresse: 128 Rue La Boétie 75008 Paris</p></a>
                    <div className={styles.constactWidget}>
                        <img src="./img/phone.svg" alt="" />
                        <a href=""><p className={styles.linkWidget}>Tél.: 0033 (0) 7 67 59 59 14</p></a>
                    </div>
                    <div className={styles.constactWidget}>
                        <img src="./img/email.svg" alt="" />
                        <a href=""><p className={styles.linkWidget}>Mail: contact@floqon.com</p></a>
                    </div>
                </div>

                <div className={styles.fourWidget}>
                    <a href=""><p className={styles.titleWidget}>Navigation</p></a>
                    <Link href="/"> <p className={styles.linkWidget}>Accueil</p> </Link>

                    <Link href="/soutiens">   <p className={styles.linkWidget}></p>Soutiens</Link>
                    <Link href="">   <p className={styles.linkWidget}></p>Blog</Link>
                    <Link href="/faq">   <p className={styles.linkWidget}></p>FAQ</Link>
                    <Link href="/contactez-nous"> <p className={styles.linkWidget}></p>Contact </Link>
                </div>
            </div>
            <hr className={styles.divider} />
            <p className={styles.year}>Copyright {new Date().getFullYear()}&nbsp; - &nbsp; FLOQON</p>
        </div>
    );
}

export default Footer;