let router = require("express").Router();
let { login, register } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);

module.exports = router;