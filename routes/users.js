const express = require("express");
const router = express.Router();

// Express validation middleware
const validator = require("../middleware/validator");
const isAuth = require("../middleware/isAuth");

// Controller function modules
const {
  UserGetAll,
  UserRegister,
  UserLogin,
  UserGetById,
  UserDelete,
  UserUpdate,
  UserLogout,
} = require("../controllers/users");

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

// @route   GET /users/login
// @desc    Login user
// @access  Public
router.post(
  "/login",
  validator(["emailRequired", "passwordRequired"]),
  UserLogin
);

// @route   GET /users/:id
// @desc    Get User by Id
// @access  Private
router.get("/:id", UserGetById);

// @route   DELETE /users/:id
// @desc    Get User with associated Id
// @access  Private
router.delete("/:id", UserDelete);

// @route   PUT /users/:id
// @desc    Update User
// @access  Private
router.put("/:id", isAuth, UserUpdate);

// @route   POST /users/logout
// @desc    Logout current user
// @access  Private
router.post("/logout", UserLogout);

module.exports = router;
