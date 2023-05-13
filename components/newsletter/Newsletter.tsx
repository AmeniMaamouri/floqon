import axios from 'axios';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Newsletter.module.scss';

const Newsletter = () => {
    const [email, setEmail] = useState<string>("")
    const [errorInput, setErrorInput] = useState<string>("")
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

    const handleSendEmail = async (event: any) => {
        event.preventDefault()
        const regexExpressionforEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
        const isEmailValid = regexExpressionforEmail.test(email)

        if (isEmailValid) {
            /* Fire api  */
            try {
                const res = await axios(`http://localhost:3000/api/emails`, {
                    method: 'POST',
                    data: { email }
                })

                /* Success */
                /* Show toast */
                notify()
                /* Clear input  */
                setEmail("")
                setErrorInput("")


            } catch (error: any) {
                /* Email existe */
                setErrorInput("Email existe déja")
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

            <form onSubmit={handleSendEmail} className={styles.pp}>
                <div className={styles.newsLettersEmail}>
                    <input className={styles.input} onChange={(e: any) => setEmail(e.target.value)} value={email} placeholder='Email' />
                    <button className={styles.btnSubmit} type='submit'>Inscription</button>
                </div>
                <p className={styles.error}>{errorInput}</p>
            </form>

            <ToastContainer />
        </div>
    );
}

export default Newsletter;