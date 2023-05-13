import styles from "../styles/Page.module.scss"
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";


const About = () => {
    return (<div>
        <Navbar />
        <div className={styles.container}>
            <h1>À PROPOS</h1>
            <p>Floqon est une plateforme de jeux de société, <u><b>à volet éducatif</b></u>, qui aide les
                personnes à améliorer leur vocabulaire à partir des <b>lettres de l’alphabet</b> d’une langue
                donnée et à travers <b>divers thèmes</b> ou <b>catégories</b> abordés.</p>
            <p>Pour ce qui est de la <u>langue française</u>, nous faisons appel <u>aux 26 lettres de l’alphabet
                français fondamental</u>.</p>

            <p>Sur Floqon, nous proposons plusieurs types de jeux éducatifs variés comme des jeux
                de carte, des jeux de plateau, etc. Tous en lien avec le vocabulaire et les mots ; et
                tout ça arrive bientôt ! Tous nos jeux sont / seront disponibles en version papier,
                mais aussi via l’application mobile, téléchargeable gratuitement sur les stores
                (Android & iOS). À partir de cette dernière, les joueurs peuvent s’entrainer à
                mémoriser la liste des mots de chaque thème ou catégorie, mais aussi jouer en solo
                ou en groupe.</p>
            <p>Pour la version gratuite, vous y trouverez, dans la rubrique “ <u><b>Générique</b></u> ”, quatorze (14)
                thèmes ou catégories listés qui sont les suivantes :</p>

            <ul className={styles.noMarker}>
                <li>- Animaux</li>
                <li>- Arbres</li>
                <li>- Capitales</li>
                <li>- Couleurs</li>
                <li>- Fleurs</li>
                <li>- Fruits</li>
                <li>- Instruments de musique</li>
                <li>- Légumes</li>
                <li>- Marques de voitures</li>
                <li>- Marques de vêtements</li>
                <li>- Outils</li>
                <li>- Pays</li>
                <li>- Sports</li>
                <li>- Styles de vêtements</li>
            </ul>

            <p>N’hésitez pas à consulter notre FAQ pour plus de détails ou à nous écrire si vous
                avez des questions ou suggestions ! Voir le lien “ <u><a href="">Contact</a></u> ” à cet effet.</p>
        </div>
        <Footer />
    </div>);
}

export default About;