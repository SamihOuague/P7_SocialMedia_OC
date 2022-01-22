let router = require("express").Router();
let { getPosts } = require("../controllers/postController");


router.get("/", getPosts);

module.exports = router;