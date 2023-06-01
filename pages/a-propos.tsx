import styles from "../styles/PageStyles.module.scss"
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";


const About = () => {
    return (<div>
        <div className={styles.bgNavBar}>
            <Navbar basketColor="WHITE" logoColor="WHITE" customStyle={{ color: 'white' }} />
        </div>
        <div className={styles.container}>
            <h1>À  PROPOS</h1>
            <img className={styles.aboutImg} src="/img/img-1.jpeg" alt="" />
            <div className={styles.description}>
                <p>Floqon est une plateforme de jeux de société, <u><b>à volet éducatif</b></u>, qui aide les personnes à améliorer leur vocabulaire à partir des lettres de l’alphabet d’une langue donnée et à travers <b>divers thèmes</b> ou <b> catégories</b> abordés. </p>
                <p>Pour ce qui est de la langue française, nous faisons appel   aux 26 lettres de l’alphabet français fondamental.</p>
                <p> Sur Floqon, nous proposons plusieurs types de jeux éducatifs variés comme des jeux de carte, des jeux de plateau, etc. Tous en lien avec le vocabulaire et les mots ; et tout ça arrive bientôt ! Tous nos jeux sont / seront disponibles en version papier, mais aussi via l’application mobile, téléchargeable gratuitement sur les stores (Android & iOS). À partir de cette dernière, les joueurs peuvent s’entrainer à mémoriser la liste des mots de chaque thème ou catégorie, mais aussi jouer en solo ou en groupe.</p>
            </div>
        </div>
        <Footer />
    </div>);
}

export default About;