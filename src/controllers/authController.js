let { loginModel, registerModel } = require("../models/auth");
let jwt = require("jsonwebtoken");

const login = (req, res) => {
    const { username, password } = req.body;
    if (!(username && password) || (username === "" || password === ""))
        return res.status(400).send({message: "Unauthorized"});
    loginModel(req.body).then((value) => {
        if (value.user) {
            jwt.sign({user_id: value.user.id, username}, "secretpwd", (err, token) => {
                if (err) return res.status(500).send({message: "Internal Error"});
                else return res.status(value.code).send({token, user_id: value.user.id});
            });
        } else {
            return res.status(value.code).send({message: value.message});
        }
    }).catch((e) => {
        return res.status(500).send(e);
    });
}

const register = (req, res) => {
    const { email, username, password } = req.body;
    if (!(username && password && email) || (username === "" || password === "" || email === ""))
        return res.status(400).send({message: "Unauthorized."});
    registerModel(req.body).then((value) => {
        if (value.user_id) {
            jwt.sign({user_id: value.user_id, username}, "secretpwd", (err, token) => {
                if (err) return res.status(500).send({message: "Internal Error"});
                else return res.status(value.code).send({token, user_id: value.user_id});
            });
        } else {
            return res.status(value.code).send({message: value.message});
        }
    }).catch((e) => {
        return res.status(500).send(e);
    });
}

module.exports = {
    login,
    register,
}