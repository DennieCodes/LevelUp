const express = require("express");
const router = express.Router();

// Express validation middleware
const validator = require("../middleware/validator");

// Controller function modules
const { UserGetAll, UserRegister } = require("../controllers/users");

// @route   GET /users
// @desc    Get all users
// @access  Public
router.get("/", UserGetAll);

// @route   POST /users
// @desc    Register a new user
// @access  Public
router.post(
  "/register",
  validator([
    "usernameRequired",
    "emailRequired",
    "emailValid",
    "passwordLength",
  ]),
  UserRegister
);

module.exports = router;
