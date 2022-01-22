let db = require("./src/models/dbconnect");

let listPosts = async () => {
    try {
        let posts = await db("posts").select("*");
        return posts;
    } catch(e) {
        return {error: e};
    }
}

module.exports = {
    listPosts,
}