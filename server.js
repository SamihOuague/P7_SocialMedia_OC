let express = require("express");
let auth = require("./src/routers/authRouter");
let app = express();

app.use(express.json());
app.use("/api/auth", auth);

app.listen(3000, () => {
    console.log("Server running with port 3000");
});