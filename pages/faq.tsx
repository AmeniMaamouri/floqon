import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import styles from "../styles/PageStyles.module.scss";
import Collapsible from 'react-collapsible';
import { useState } from 'react';

const Faq = () => {
    const [isClicked, setIsClicked] = useState(false);
    const triggerStyle = {
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: ' 21px',
        color: '#90346E',
        cursor: 'pointer',
        padding: '15px',
        display: 'block',
        borderBottom: '1px solid #CED4DA'
    };

    const iconStrokeStyle = {
        transform: isClicked ? 'rotate(180deg)' : 'rotate(0deg)',
    };
    const handleClick = () => {
        console.log('click')
        setIsClicked(!isClicked);
    };
    return (<div>
        <div className={styles.bgNavBar}>
            <Navbar basketColor="WHITE" logoColor="WHITE" customStyle={{ color: 'white' }} />
        </div>
        <div className={styles.container}>
            <h1>FOIRE AUX QUESTIONS</h1>
            <img className={styles.aboutImg} src="/img/faq.jpeg" alt="" />



            {/* 
            <h1 style={{marginTop:'80px'}}>L’ÉQUIPE  FLOQON  VOUS  REMERCIE !</h1>
           <div style={{textAlign:"center"}}>
           <img  src="/img/logo3x.png" />
           </div> */}
        </div>
        <div className={styles.containerFaq}>
            <Collapsible triggerStyle={triggerStyle} trigger={
                <div onClick={handleClick} className={styles.triggerStyle}>
                    <h1>1. QU’EST-CE QUE FLOQON ?</h1>
                    <img style={iconStrokeStyle} src="/img/stroke.svg" />
                </div>}>
                <p>Floqon est une plateforme de jeux de société, à volet pédagogique, qui aide à
                    améliorer son vocabulaire (apprendre et mémoriser des mots nouveaux), à partir de
                    divers thèmes abordés.</p>
                <p>Floqon, c’est d’abord des jeux en physique (cartes et jeux de plateau), mais c’est
                    également une application mobile, disponible sur Android et iOS, pour pouvoir
                    s’entrainer et jouer en ligne, seul et/ou en groupe.</p>
                <p>Floqon dispose d’un premier jeu nommé “ Floqon Alphabet “ que vous pouvez, d’ores
                    et déjà, commander sur la boutique en ligne “ www.floqon-store.com ” et consulter
                    sur son application mobile “Floqon”.</p>
                <hr />
            </Collapsible>
            <Collapsible triggerStyle={triggerStyle} trigger={
                <div onClick={handleClick} className={styles.triggerStyle}>
                    <h1> À QUI S’ADRESSENT LES JEUX FLOQON ?</h1>
                    <img style={iconStrokeStyle} src="/img/stroke.svg" />
                </div>}>
                <p>Les jeux Floqon s’adressent, avant tout, aux enfants de plus de 8 ans (à l’école comme à la maison) et aux jeunes migrants et/ou réfugiés primo-arrivants, catégorisés MNA (Mineurs Non Accompagnés) ou MIE (Mineus Isolés Étrangers).</p>
                <p>En dehors de ce premier public visé, Floqon est aussi très intéressant pour les parents (pour jouer et apprendre en famille), pour les professionnels (pour jouer et découvrir entre collègues) et pour toute autre personne qui souhaite se divertir, en apprenant des mots nouveaux.</p>
                <hr />
            </Collapsible>

        </div>
        <Footer />
    </div>);
}

export default Faq;