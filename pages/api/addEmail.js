
import { Level } from 'level';
import short from 'short-uuid'
const regexExpressionforEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
import {levelDBStore} from '../../newsletter'



export default async function addEmail(req, res) {

    const insertEmail = async (email) => {
        levelDBStore.open('../../newsletter-db')
        const emails = await levelDBStore.values().all();
        const isExist = emails.find(element => element === email)
        const isEmailValid = regexExpressionforEmail.test(email)
        if (!isEmailValid) {
            return { code: 400, message: "Invalid email" }
        }

        if (isExist !== undefined) {
            return { code: 500, message: "Email is exist" }
        } else {
            await levelDBStore.put(short.uuid(), email)
            return { code: 201, message: "Email has ben saved" }
        }
    }

    const { email } = req.body
    if (!email) {
        res.status(500).json({ error: "email cannot by emty or null" });
    }
    await insertEmail(email).then((response) => {
        const msg = response.message;
        res.status(response.code).json({ msg });

    })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });


}
