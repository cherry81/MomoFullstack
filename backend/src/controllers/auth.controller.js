const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  const { name, email, phone, password } = req.body;

  if (!name || !email || !phone || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  const isUserAlreadyExist = await User.findOne({ email });
  if (isUserAlreadyExist) {
    return res.status(400).json({
      message: "User already exist",
    });
  }

  //password hashing
  const hashPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashPassword,
    phone,
  });

  res.status(201).json({
    message: "User registered sucessfully",
    user: {
      id: user._id,
      email: user.email,
      name: user.name,
      phone: user.phone,
    },
  });
}

async function loginUser(req, res) {
  let { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  //check user email provided is matched with email from database
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message: "User not registered",
    });
  }

  //check given password is matched with password from database
  const passwordValid = await bcrypt.compare(password, user.password);
  if (!passwordValid) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  //user token provided if everything match
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRETE_KEY
  );
  res.cookie("token", token);
  //successfull response if user is logged in
  res.status(200).json({
    message: "User logged in sucessfully",
    user: {
      id: user._id,
      email: user.email,
      name: user.name,
    },
  });
}

async function logoutUser(req, res) {
  res.clearCookie("token");
  res.status(200).json({
    message: "User logged out Successfully",
  });
}

module.exports = { registerUser, loginUser, logoutUser };
