
import { Level } from 'level';
import short from 'short-uuid'

// Create a database
const levelDBStore = new Level('newsletter-db', { valueEncoding: 'json' });


export default async function handleEmails(req, res) {

    if (req.method === 'POST') {
        const regexExpressionforEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)

        const insertEmail = async (email) => {
            const emails = await levelDBStore.values().all();
            const isExist = emails.find(element => element === email)
            const isEmailValid = await regexExpressionforEmail.test(email)

            if (!isEmailValid) {
                res.json({ code: 400, message: "Invalid email" })
            } else if (isExist !== undefined) {
                return res.json({ code: 500, message: "Email is exist" })
            } else {
                await levelDBStore.put(short.uuid(), email)
                return res.json({ code: 201, message: "Email has ben saved" })
            }
        }

        const { email } = req.body
       
        if (!email) {
            res.json({ error: "email cannot by emty or null" });
        }
        await insertEmail(email)

    } else {
        const getEmails = async () => {
            const value = await levelDBStore.values().all()
            return value;
        }

        await getEmails().then((emails) => {
            res.json({ emails });
        }).catch((error) => {
            res.json({ error: error.message });
        });
    }
  
}
