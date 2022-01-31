let express = require("express");
let auth = require("./src/routers/authRouter");
let posts = require("./src/routers/postRouter");
let cors = require("cors");
let { isAuth } = require("./src/utils/middleware");
let app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", auth);
app.use("/api/post", isAuth, posts);

app.listen(3001, () => {
    console.log("Server running with port 3001");
});