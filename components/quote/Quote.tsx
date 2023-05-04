import styles from './Quote.module.scss'

const Quote = () => {
    return (
        <div className={styles.container}> 
            <div className={styles.content}>
                <div>
                    <p>“ Il n'est pas de bonne <span>pédagogie</span> qui ne commence par <span>éveiller</span> le désir d'<span>apprendre</span> ”</p>
                    <p>François de Closets</p>
                    <p>Journaliste et essayiste français</p>
                </div>
                <img src='/img/quote.png' />
            </div>
        </div>
    );
}

export default Quote;