const express = require("express");
const authrouter = require("./routes/auth.routes");
const productRouter = require("./routes/product.routes");
const app = express();
var cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.use("/api/auth", authrouter);
app.use("/api/products", productRouter);

module.exports = app;
