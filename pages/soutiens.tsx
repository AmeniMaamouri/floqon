// import styles from "../styles/Page.module.scss"
import styles from "../styles/PageStyles.module.scss";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";



const Supports = () => {
    return (
        <div>
            <div className={styles.bgNavBar}>
                <Navbar basketColor="WHITE" logoColor="WHITE" customStyle={{ color: 'white' }} />
            </div>
            <div className={styles.container}>
                <h1>Soutiens</h1>
                <img className={styles.aboutImg} src="/img/Soutiens_Floqon.jpg" alt="" />
                <div className={styles.description} style={{ textAlign: 'center' }}>
                    <img className={styles.awardImg} src="./img/prix.png" alt="" />

                    <p>En 2021, <b>FLOQON</b> remporte le “ <b>Prix Collège</b> ” du concours “ <u><b>Éducation 2021</b></u> ”,
                        organisé par le <b>CLUB 21e SIÈCLE</b>.</p>
                    <p>Ainsi, le <b>CLUB 21e SIÈCLE</b> est le premier soutien pour le lancement de <b>FLOQON</b>.</p>
                    <p>Par ailleurs, <b>FLOQON</b> reste ouvert à tout partenariat qui lui permet d’avoir plus de
                        visibilité et de toucher un maximum de personnes et de familles. Nous comptons
                        évidemment sur le concours de tous : particuliers, associations, entreprises et
                        institutions.</p>
                    <p>Merci</p>
                </div>
            </div>
            <Footer />
        </div>);
}

export default Supports;