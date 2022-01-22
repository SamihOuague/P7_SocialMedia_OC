let db = require("./dbconnect");

let listPosts = async () => {
    try {
        let posts = await db("posts").select("*");
        return posts;
    } catch(e) {
        return {error: e};
    }
}

let addPost = async () => {
    try {
        let newPost = await db("posts").insert({});
    } catch(e) {

    }
}

module.exports = {
    listPosts,
}