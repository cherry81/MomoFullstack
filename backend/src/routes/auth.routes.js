const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/auth.controller");

const authrouter = express.Router();

authrouter.post("/user/register", registerUser);
authrouter.post("/user/login", loginUser);
authrouter.post("/user/logout", logoutUser);

module.exports = authrouter;
