let { loginModel, registerModel } = require("../models/auth");

const login = (req, res) => {
    const { username, password } = req.body;
    if (!(username && password) || (username === "" || password === ""))
        return res.status(400).send({message: "Unauthorized"});
    loginModel(req.body).then((value) => {
        return res.status(value.code).send({body: (value.user) ? value.user : value.message});
    }).catch((e) => {
        return res.status(500).send(e);
    });
}

const register = (req, res) => {
    const { email, username, password } = req.body;
    if (!(username && password && email) || (username === "" || password === "" || email === ""))
        return res.status(400).send({message: "Unauthorized."});
    registerModel(req.body).then((value) => {
        return res.status(value.code).send({body: (value.userId) ? value.userId : value.message});
    }).catch((e) => {
        return res.status(500).send(e);
    });
}

module.exports = {
    login,
    register,
}