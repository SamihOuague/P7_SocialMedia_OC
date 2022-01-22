const { listPosts } = require("../models/posts");

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

module.exports = {
    getPosts,
}