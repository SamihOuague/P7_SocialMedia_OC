const bcrypt = require("bcrypt");
let db = require("../models/dbconnect");

const loginModel = async (body) => {
    const { username, password } = body;
    try {
        let account = await db("accounts").select("*").where({username});
        if (account[0]) {
            let compared = await bcrypt.compare(password, account[0].password);
            if (compared)
                return { user: account[0], code: 200 };
            else
                return { message: "Unauthorized ! Invalid password !", code: 400 };
        } else {
            return { message: "Unauthorized !", code: 400};
        }
    } catch(e) {
        return { message: e, code: 500 };
    }
}

const registerModel = async (body) => {
    const { email, username, password } = body;
    try {
        let hashed = await bcrypt.hash(password, 12);
        let accountId = await db("accounts").insert({email, username, password: hashed});
        return { user_id: accountId[0], code: 201 };
    } catch(e) {
        return { message: e, code: 500 };
    }
}

module.exports = {
    loginModel,
    registerModel,
}