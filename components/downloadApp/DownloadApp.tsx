import styles from './DownloadApp.module.scss'

const DownloadApp = () => {
    return (
        <div className={styles.container}>
            <img src="/img/phone.png" />
            <div className={styles.description}>
                <h2>Télécharger <br /> l'application FLOQON</h2>
                <p>Floqon est une application de jeux de société à volet éducatif, qui aide à apprendre des mots nouveaux et à améliorer son vocabulaire, à travers divers thèmes abordés.</p>

                <div className={styles.hero__downloadApp}>
                    <a href="https://play.google.com/store/apps/details?id=com.Solodou.MagicalSlate&hl=fr&gl=US" target="_blank">
                        <img alt='playstore download' className='playstoreImg' src={'/img/googleplay.svg'} />
                    </a>
                    <a className='macImg' href="https://apps.apple.com/us/app/ardoiz-magiik/id1546554019" target="_blank">
                        <img alt='mac download' className='macImgDownload' src={'/img/appStore.svg'} />
                    </a>
                </div>
                
            </div>
        </div>
    );
}

export default DownloadApp;