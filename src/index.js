const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const authRoute = require("./routes/auth"); //importing routes
const postsRoute = require("./routes/posts"); //importing routes

app.use(express.json()); //middleware
app.use("/api/user", authRoute); //routes middleware
app.use("/api/posts", postsRoute);
//connect to db
mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
    app.listen(3000, () => console.log("Server running at port 3000 "));
});
