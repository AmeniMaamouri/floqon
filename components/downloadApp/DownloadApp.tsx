import styles from './DownloadApp.module.scss'

const DownloadApp = () => {
    return (
        <div className={styles.container}>
            <img src="/img/phone.png" />
            <div className={styles.description}>
                <h2>Télécharger <br /> l'application FLOQON</h2>
                <p>Floqon est une application de jeux de société à volet éducatif, qui aide à apprendre des mots nouveaux et à améliorer son vocabulaire, à travers divers thèmes abordés.</p>
            </div>
        </div>
    );
}

export default DownloadApp;