const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
async function authUserMiddleware(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "unauthorized access",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRETE_KEY);
    const user = await User.findById(decoded.id);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }
}

module.exports = { authUserMiddleware };
