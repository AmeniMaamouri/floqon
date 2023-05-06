import useApi from '@/hooks/useApi'
import { useState } from 'react'
import styles from './Newsletter.module.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {
    const [email, setEmail] = useState<string>("")
    const [errorInput, setErrorInput] = useState<string>("Invalide email")
    const notify = () => toast.success("Vous étes maintenant inscrit aux newsletters", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });;
    /* Api Informations */
    const { fetchApi, setDataApi, dataFetched, error, loading } = useApi({ url: "hg", request: "POST" })


    const handleSendEmail = (event: any) => {
        event.preventDefault()
        const regexExpressionforEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
        const isEmailValid = regexExpressionforEmail.test(email)
        
        if (isEmailValid) {
            /* Fire api  */
            setDataApi({ email: 'ameni@df.df' })
            fetchApi()

            /* Email existe */
            if (error) setErrorInput("Email existe déja")

            /* Success */
            if (dataFetched) {
                /* Show toast */
                notify()
                /* Clear input  */
                setEmail("")
                setErrorInput("")
            }

        }
        if (!isEmailValid) {
            setErrorInput("Invalide email")
        }
    }

    return (
        <div className={styles.container}>
            <h2>Newsletter</h2>
            <p className={styles.description}>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page</p>

            <form onSubmit={handleSendEmail}>
                <input className={styles.input} onChange={(e: any) => setEmail(e.target.value)} value={email} placeholder='Email' />
                <button className={styles.btnSubmit} type='submit'>Inscription</button>
                <p className={styles.error}>{errorInput}</p>
            </form>

            <ToastContainer />
        </div>
    );
}

export default Newsletter;