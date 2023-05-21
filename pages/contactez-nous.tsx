import styles from "../styles/Page.module.scss"
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const ConstactUs = () => {
    return ( <div>
        <Navbar/>
        <div className={styles.container}>
            <h1 style={{marginBottom:"120px"}}>CONTACTEZ-NOUS</h1>
            <div className={styles.content}>
                <div className={styles.map}>
                    <img className={styles.images} src="./img/gps.png" alt="" />
                    <p><b>Adresse :</b></p>
                    <p>128 Rue La Boétie</p>
                    <p>75008 Paris</p>
                </div>
                <div  className={styles.email}>
                <img className={styles.images} src="./img/email.png" alt="" />
                <p><b>Email :</b></p>
                <p><u>contact@floqon.com</u></p>
                </div>
                <div className={styles.phone}>
                <img  className={styles.images} src="./img/telephone-call.png" alt="" />
                    <p><b>Téléphone :</b></p>
                    <p>0033 (0) 7 67 59 59 14</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div> );
}
 
export default ConstactUs;