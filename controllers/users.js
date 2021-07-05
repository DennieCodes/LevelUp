const User = require("../models/User");
const { validationResult } = require("express-validator");

// Encryption package for password
const bcrypt = require("bcrypt");

module.exports = {
  // @route   GET /users
  // @desc    Get all users
  // @access  Public
  async UserGetAll(req, res) {
    res.send("Get all Users");
  },

  // @route   POST /users
  // @desc    Get all users
  // @access  Public

  async UserRegister(req, res) {
    // Search for errors from express-validation
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Get submitted data
    const { username, email } = req.body;
    // req.body.password

    res.send("User Register");
  },
};
