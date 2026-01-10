const express = require("express");
const authrouter = require("./routes/auth.routes");
const app = express();

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.use("/api/auth", authrouter);

module.exports = app;
