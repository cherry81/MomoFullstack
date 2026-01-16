const express = require("express");
const authrouter = require("./routes/auth.routes");
const productRouter = require("./routes/product.routes");
const app = express();
var cookieParser = require("cookie-parser");
var cors = require("cors");

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.use("/api/auth", authrouter);
app.use("/api/products", productRouter);

module.exports = app;
