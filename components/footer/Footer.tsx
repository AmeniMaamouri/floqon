import Link from 'next/link';
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footerWidget}>
                <div className={styles.firstWidget}>
                    <a className={styles.logoFooter} href=""><img src="/img/logo_footer.svg" alt="" /></a>
                    <div className={styles.socialMedia}>
                        <a href=""><img src="/img/facebook.svg" alt="" /></a>
                        <a href=""><img src="/img/twitter.svg" alt="" /></a>
                        <a href=""><img src="/img/googleplus.svg" alt="" /></a>
                        <a href=""><img src="/img/linkedin.svg" alt="" /></a>
                        <a href=""><img src="/img/tiktok.svg" alt="" /></a>
                    </div>
                </div>
                <div className={styles.secondWidget}>
                    <a href=""><p className={styles.titleWidget}>Informations</p></a>
                    <div className={styles.pp}>
                        <Link href="/conditions-generales">  <p className={styles.linkWidget}>Conditions Générales d{"'"}Utilisation</p></Link>
                        <Link href="/conditions-generales-de-vente"> <p className={styles.linkWidget}></p>Conditions Générales de Vente</Link>
                        <Link href="/mentions-legales"> <a ><p className={styles.linkWidget}></p>Mentions Légales</a></Link>
                        <Link href="/utilisation-des-cookies">  <p className={styles.linkWidget}></p>Utilisation des cookies</Link>
                        <Link href="/politique-de-confidentialite"><p className={styles.linkWidget}></p>Politique de confidentialités</Link>
                    </div>
                </div>

                <div className={styles.thirddWidget}>
                    <a href=""><p className={styles.titleWidget}>Contactez-nous</p></a>
                    <a href=""><p className={styles.linkWidget}>Adresse: 97 Boulevard André Sautel, 17000 La Rochelle.</p></a>
                    <div className={styles.constactWidget}>
                        <img src="./img/phone.svg" alt="" />
                        <a href=""><p className={styles.linkWidget}>Tél.: +33 1 23 45 67 89</p></a>
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
            <p className={styles.year}>Copyright {new Date().getFullYear()} FLOQON</p>
        </div>
    );
}

export default Footer;