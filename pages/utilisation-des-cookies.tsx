import styles from "../styles/PageStyles.module.scss"
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
const Cookies = () => {
    return (<div>
        <div className={styles.bgNavBar}>
            <Navbar basketColor="WHITE" logoColor="WHITE" customStyle={{ color: 'white' }} />
        </div>
        <div className={styles.container}>
            <h1>COOKIES</h1>
            <img className={styles.aboutImg} src="/img/Cookies_Floqon.jpg" alt="" />
            <div className={styles.description} style={{ textAlign: 'left' }}>
                <p>Les cookies sont des petits fichiers qui sont déposés automatiquement sur votre
                    navigateur lorsque vous surfez sur internet. Floqon qui est un produit de Solodou,
                    utilise ses propres cookies ainsi que ceux des tiers partis, en vue d{"'"}effectuer
                    certaines opérations suivantes :</p>
                <ul>
                    <li>Pour vous permettre de vous connecter rapidement à nos services.</li>
                    <li>Pour se souvenir de vos préférences et de vos paramètres.</li>
                    <li>Pour sécuriser votre compte.</li>
                    <li>Pour mieux comprendre comment les gens utilisent nos services, améliorer et
                        promouvoir ces services sur la base des informations récupérées.</li>
                    <li>Pour mesurer votre utilisation du site web et de l’application Floqon, en vue de
                        les améliorer et pour les adapter aux intérêts probables des visiteurs et mener
                        à bien des études de marché.</li>
                    <li>Pour mieux comprendre vos centres d{"'"}intérêt afin que nous puissions vous
                        fournir des annonces et des contenus plus pertinents sur notre site
                        web/application ou sur des sites tiers.</li>
                    <li>Pour exécuter les solutions aux expériences Cloud de Floqon, en vue d{"'"}aider
                        les parents à personnaliser et améliorer la performance de leurs enfants.</li>
                </ul>
                <h2>PERFORMANCE DES COOKIES</h2>
                <p>Floqon collecte des cookies sur son Site et / ou ses Services pour obtenir des
                    informations sur les visites de pages (ex : « performance des cookies »). Ces
                    informations sont anonymes et Floqon les utilise seulement pour un usage interne
                    afin de pouvoir proposer des contenus efficaces pour nos visiteurs. Les informations
                    de cookies sont utilisées pour évaluer la popularité de la page de visite, analyser les

                    modèles de trafic sur notre site et / ou nos services et servir de guide pour le
                    développement dudit site et / ou des services proposés.</p>

                <h2>CIBLAGE, PERFORMANCE ET FONCTIONNALITÉS DES COOKIES</h2>
                <p>Dans les programmes de messagerie, Floqon utilise plusieurs méthodes de suivi (par
                    exemple, « ciblage, performance et fonctionnalité des Cookies »). Nous suivons les «
                    ouvertures » via un pixel de suivi dans le courriel, ce qui signifie que nous suivons
                    ceux qui ouvrent nos messages électroniques et à quel moment ; nous suivons
                    également les « clics » via les URL codées pour voir si vous cliquez ou non sur les
                    liens contenus dans nos messages e-mail. Ces informations sont utilisées
                    seulement pour notre usage interne pour nous aider à vous livrer des messages
                    pertinents ; par conséquent, elles ne sont partagées avec aucun tiers.</p>
                <h2>FONCTIONNALITÉS ET NÉCESSITÉS DES COOKIES</h2>
                <p>Floqon n{"'"}exige pas que vous acceptiez les cookies ; d{"'"}ailleurs, vous pouvez retirer
                    votre consentement à l{"'"}utilisation des cookies à tout moment, en ajustant les
                    paramètres de confidentialité de votre navigateur. Toutefois, certaines
                    fonctionnalités sur notre site (ex : « fonctionnalités des cookies »), notre processus
                    de vérification des produits et nos services peuvent être désactivés, si vous refusez
                    d{"'"}accepter les cookies (ex : « nécessités des cookies »).</p>
                <h2>DÉSACTIVER LES COOKIES</h2>
                <p>En utilisant notre site/application et nos services, vous consentez à l{"'"}emplacement
                    des cookies référencés ci-dessus. Vous pouvez, néanmoins, ajuster votre navigateur
                    pour vous notifier lorsque vous recevez un cookie, vous laissant ainsi la possibilité
                    de les accepter ou non. Vous pouvez également le cas échéant, modifier les
                    paramètres des cookies dans l{"'"}option de préférence sur notre site et / ou services.
                    Nous indiquerons que lors de la sélection de vos préférences, nous utiliserons un
                    cookie pour mémoriser votre préférence.</p>
            </div>

        </div>
        <Footer />
    </div>);
}

export default Cookies;