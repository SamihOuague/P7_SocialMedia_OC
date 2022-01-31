const { listPosts, addPost, getPostById, upPost, delPost } = require("../models/posts");

const getPosts = (req, res) => {
    listPosts().then((value) => {
        if (value)
            return res.status(200).send(value);
        else
            return res.status(404).send({message: "Not found."});
    }).catch((e) => {
        return res.status(500).send(e);
    });
}

const getPost = (req, res) => {
    getPostById(req.params.id).then((value) => {
        if (value)
            return res.status(200).send(value);
        else
            return res.status(404).send({message: "Not found."});
    }).catch((e) => {
        return res.status(500).send(e);
    });
}

const createPost = (req, res) => {
    const { user_id, image_url, content } = req.body;
    if (!user_id || (!image_url && !content))
        return res.status(400).send({message: "Bad request"});
    addPost(req.body).then((value) => {
        return res.status(201).send(req.body);
    }).catch((e) => {
        return res.status(500).send(e);
    })
}

const updatePost = (req, res) => {
    const { image_url, content } = req.body;
    if (!image_url && !content)
        return res.status(400).send({message: "Bad request"});
    upPost(req.body, req.params.id).then((value) => {
        return res.status(200).send({value});
    }).catch((e) => {
        return res.status(500).send(e);
    });
}

const deletePost = (req, res) => {
    const { id } = req.params;
    if (!id)
        return res.status(400).send({message: "Bad request"});
    delPost(id).then((value) => {
        res.status(200).send({value});
    }).catch((e) => {
        return res.status(500).send(e);
    });
}

module.exports = {
    getPosts,
    createPost,
    getPost,
    updatePost,
    deletePost,
}