import styles from "../styles/Page.module.scss"
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";



const Supports = () => {
    return (
        <div>
       <Navbar basketColor="BLUE" logoColor="BLUE" customStyle={{ color: '#183282' }} />
            <div className={styles.container}>

                <div style={{textAlign:'center'}}>
                    <img style={{marginBottom:'50px', marginTop:'50px'}} src="./img/prix.png" alt="" />

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