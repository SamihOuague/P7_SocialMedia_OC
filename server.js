let express = require("express");
let auth = require("./src/routers/authRouter");
let posts = require("./src/routers/postRouter");
let app = express();

app.use(express.json());
app.use("/api/auth", auth);
app.use("/api/post", posts);

app.listen(3000, () => {
    console.log("Server running with port 3000");
});