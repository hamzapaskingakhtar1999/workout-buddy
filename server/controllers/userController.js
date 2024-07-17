const User = require("../models/UserModel");

// Login User

const loginUser = async (req, res) => {
  res.json({ message: "Login User" });
};

// Signup User
const signupUser = async (req, res) => {
  res.json({ message: "Sign Up User" });
};

module.exports = { signupUser, loginUser };
