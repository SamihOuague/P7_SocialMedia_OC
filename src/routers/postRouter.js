let router = require("express").Router();
let { getPosts, createPost, getPost, updatePost, deletePost } = require("../controllers/postController");


router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;