const { verify } = require("jsonwebtoken");

module.exports = {
    isAuth: (req, res, next) => {
        if (!req.headers.authorization) return res.status(400).send({message: "Unauthorized !"});
        else {
            let token = req.headers.authorization.split(" ")[1];
            verify(token, "secretpwd", (err, decoded) => {
                if (err) return res.status(400).send({message: "Unauthorized !"});
                else {
                    req.body.user_id = decoded.user_id;
                    req.body.username = decoded.username;
                    next();
                }
            });
        }
    }
}