let db = require("./dbconnect");

let listPosts = async () => {
    try {
        let posts = await db("posts").select("*");
        return posts;
    } catch(e) {
        return e;
    }
}

let getPostById = async (id) => {
    try {
        let post = await db("posts").where({id}).select("*");
        return post;
    } catch(e) {
        return e;
    }
}

let addPost = async (body) => {
    const { user_id, image_url, content } = body;
    try {
        let newPost = await db("posts").insert({user_id, image_url, content});
        return newPost;
    } catch(e) {
        return e;
    }
}

let upPost = async (body, id) => {
    const { image_url, content } = body;
    try {
        let upPost = await db("posts").where({id}).update({image_url, content});
        return upPost;
    } catch(e) {
        return e;
    }
}

let delPost = async (id) => {
    try {
        let delPost = await db("posts").where({id}).del();
        return delPost;
    } catch(e) {
        return e;
    }
}

module.exports = {
    listPosts,
    addPost,
    upPost,
    getPostById,
    delPost,
}