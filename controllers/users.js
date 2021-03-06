const User = require("../models/User");
const { validationResult } = require("express-validator");

// Encryption package for password
const bcrypt = require("bcrypt");

module.exports = {
  // @route   GET /users
  // @desc    Get all users
  // @access  Public

  async UserGetAll(req, res) {
    try {
      const users = await User.find()
        .populate("user", ["name", "_id"])
        .select("-password");
      res.json(users);
    } catch (error) {
      console.log(`There was an error: ${error.message}`);
    }
  },

  // @route   POST /users/register
  // @desc    Register a new user
  // @access  Public

  async UserRegister(req, res) {
    // Search for errors from express-validation
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Get submitted data from req
    const { username, email, password } = req.body;

    try {
      // Check if the user exists in the database by comparing unique email
      let user = await User.findOne({ email });

      // If the email in the request is already in the system return error
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      // If user doesn't exist then encrypt password, create new model object and save
      // Load request data into user object
      user = new User({
        username,
        email,
        password,
      });

      // Encrypt user password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Save the new user via mongoose
      await user.save();

      // NOTE: Response after successful register
      // NOTE: After Authentication is implemented remove the response
      res.json({ user });
    } catch (error) {
      console.log(`There was an error: ${error.message}`);
    }
  },

  // @route   POST /users/login
  // @desc    Login user
  // @access  Public

  async UserLogin(req, res) {
    // Search for errors from express-validation
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Destructure email and password
    const { email, password } = req.body;

    try {
      // Check if the user exists in the database by comparing unique email
      let user = await User.findOne({ email });

      // Return a 404 error if user is not found
      if (!user) {
        return res
          .status(404)
          .json({ errors: [{ msg: "That email is not registered" }] })
          .redirect("/register");
      }

      // Use bcrypt to compare passwords submitted to one on file
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({
          errors: [{ msg: "The email and password provided do not match" }],
        });
      }

      // Set session authentication flag and associate with user
      req.session.user_id = user._id;
      req.session.isAuth = true;

      // Return username and id in response
      const { username, id } = user;
      res.json({ username, id });
    } catch (error) {
      console.log(`There was an error: ${error.message}`);
    }
  },

  // @route   GET /users/:id
  // @desc    Get User by id
  // @access  Public

  async UserGetById(req, res) {
    // Retrieve id parameter
    const userId = req.params.id;

    // Check that the authenticated user matches the user whose detail is being requested
    if (userId !== req.session.user_id) {
      return res
        .status(403)
        .json({ errors: [{ msg: "You do not have authorization" }] })
        .send("You are not authorized to view that user details");
    }

    // Search database for user
    try {
      const user = await User.findOne({ _id: userId }).select("-password");

      // Return a 404 error if user is not found
      if (!user) {
        return res
          .status(404)
          .json({ errors: [{ msg: "That user is not registered" }] })
          .send("That user was not found");
      }

      // Return User by Id
      res.json(user);
    } catch (error) {
      console.log(`There was an error: ${error.message}`);
    }
  },

  // @route   DELETE /users/:id
  // @desc    Delete user associated with id
  // @access  Private

  async UserDelete(req, res) {
    // Retrieve id parameter
    const userId = req.params.id;

    // Check that the authenticated user matches the user whose detail is being requested
    if (userId !== req.session.user_id) {
      return res
        .status(403)
        .json({ errors: [{ msg: "You do not have authorization" }] })
        .send("You are not authorized");
    }

    // Search database for user
    try {
      let user = await User.findOne({ _id: userId });

      // Return a 404 error if user is not found
      if (!user) {
        return res
          .status(404)
          .json({ errors: [{ msg: "That user is not registered" }] })
          .send("That user is not registered");
      }

      // Delete User
      user = await User.findOneAndDelete({ _id: userId });

      // Logout User and terminate session
      UserLogout(req, res);

      res.send("The user was deleted");
    } catch (error) {
      console.log(`There was an error: ${error.message}`);
    }
  },

  // @route   PUT /users/:id
  // @desc    Update user associated with id
  // @access  Private

  async UserUpdate(req, res) {
    // Retrieve id parameter
    const userId = req.params.id;

    // Destructure request data
    const { username, email, password } = req.body;

    // Check that the authenticated user matches the user whose detail is being requested
    if (userId !== req.session.user_id) {
      return res
        .status(403)
        .json({ errors: [{ msg: "You do not have authorization" }] })
        .send("You are not authorized");
    }

    // Search database for user
    try {
      let user = await User.findOneAndUpdate(
        { _id: userId },
        { username, email, password }
      );

      // Return a 404 error if user is not found
      if (!user) {
        return res
          .status(404)
          .json({ errors: [{ msg: "That user is not registered" }] });
      }

      res.send("The user was updated");
    } catch (error) {
      console.log(`There was an error: ${error.message}`);
    }
  },

  ///////////////////////
  // @route POST /users/logout
  // Logout User
  UserLogout(req, res) {
    req.session.destroy((err) => {
      if (err) throw err;
      res.send("User was logged out");
    });
  },
};
