import Navbar from '@/components/navbar/Navbar';
import styles from "../styles/PageStyles.module.scss"
import Footer from '@/components/footer/Footer';
const LegalNotice = () => {
    return (<div>
        <div className={styles.bgNavBar}>
            <Navbar basketColor="WHITE" logoColor="WHITE" customStyle={{ color: 'white' }} />
        </div>
        <div className={styles.container}>
        <h1>MENTIONS LÉGALES</h1>
            <img className={styles.aboutImg}  src="/img/Mentions-Legales-Floqon.jpg" alt="" />
      
           <div  className={styles.description} style={{ textAlign: 'left' }}>
           <p>Cette page présente les Mentions Légales s’appliquant à tout internaute, nommé
                ci-après « Visiteur », qui visite le site web <u>www.floqon.com</u> , nommé ci-après « Site ».
                Tout visiteur du Site <u> www.floqon.com </u> est réputé accepter les Mentions Légales et
                les Conditions Générales d’Utilisation, régissant le fonctionnement du Site. Les
                présentes Mentions Légales et Conditions Générales d’Utilisation peuvent être
                modifiées à tout moment, et sans préavis. Il appartient au visiteur du Site de
                consulter régulièrement les éventuelles modifications des présentes. Aussi,
                conformément à l’article n°6 de la loi n°2004-575 du 21 Juin 2004 pour la confiance
                dans l’économie numérique, les informations du présent site web <u>www.floqon.com</u> ,
                dérivant de www.solodou.com sont :</p>

            <h2>FONDATEUR DU SITE</h2>
            <p>Ousmane BAH</p>
            <p><b>Solodou SASU</b> © <b>2018</b></p>
            <p><b>RCS Paris </b>: 841 942 055</p>
            <p><b>Capital Social</b> : 100 €</p>
            <p>128 Rue La Boétie</p>
            <p>75008 Paris</p>
            <p><b>Tél</b>: 07 67 59 59 14</p>
            <p><b>Mail</b> : <u>contact@floqon.com</u></p>
            <h2>HÉBERGEMENT</h2>
            <p>OVH Cloud</p>
            <p>2 Rue Kellermann</p>
            <p>59100 Roubaix</p>
            <p>www.ovh.com</p>
           </div>
        </div>
        <Footer />
    </div>);
}

export default LegalNotice;