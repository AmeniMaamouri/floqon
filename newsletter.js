const { Level } = require('level');
const short = require('short-uuid');
const regexExpressionforEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)

// Create a database
const levelDBStore = new Level('newsletter-db', { valueEncoding: 'json' });

module.exports = class newsletter {

    async getEmails() {
        const value = await levelDBStore.values().all()
        return value;
    }

    async insertEmail(email) {
        const emails = await levelDBStore.values().all();
        const isExist = emails.find(element => element === email)
        const isEmailValid = regexExpressionforEmail.test(email)
        if(!isEmailValid) {
            return  {code: 400, message: "Invalid email"}
        }

       if(isExist !== undefined) {
            return  {code: 500, message: "Email is exist"}
        }else {
            await levelDBStore.put(short.uuid(), email)
            return  {code: 201, message: "Email has ben saved"}
        }  
    }
};   