const Todo = require("../models/Todo");

// Function to retrieve express validation results
const { validationResult } = require("express-validator");

module.exports = {
  // @route   POST /todos
  // @desc    Create a new todo item
  // @access  Public

  async TodosCreate(req, res) {
    // Search for errors from express-validation
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Destructure Todo values from request body
    const { name, repeats, tags } = req.body;

    // author will come from authenticated user
    const author = req.session.user_id;

    try {
      // Construct new Todo object
      const todo = new Todo({
        name,
        repeats,
        tags,
        author,
      });

      // Save new Todo item
      await todo.save();

      res.send("New Activity was created");
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Server Error");
    }
  },

  // @route   GET /todos/:id
  // @desc    Get todos by Id
  // @access  Private

  async TodosGetById(req, res) {
    // Retrieve id parameter
    const todoId = req.params.id;

    // Search database for matching todo
    try {
      const todo = await Todo.findOne({ _id: todoId });

      // Return a 404 error if user is not found
      if (!todo) {
        return res
          .status(404)
          .json({ errors: [{ msg: "That todo is not registered" }] });
      }

      // Return todo by Id
      res.json(todo);
    } catch (error) {
      console.log(`There was an error: ${error.message}`);
    }
  },

  // @route   DELETE /todos/:id
  // @desc    Delete todos by Id
  // @access  Private

  async TodosDelete(req, res) {
    // Retrieve id parameter
    const todoId = req.params.id;

    // --------------------------
    // NOTE: will need to check id matches authenticated user

    // Search database for todo
    try {
      let todo = await Todo.findOne({ _id: todoId });

      // Return a 404 error if user is not found
      if (!todo) {
        return res
          .status(404)
          .json({ errors: [{ msg: "That todo is not registered" }] })
          .send("That todo is not registered");
      }

      // Delete User
      activity = await Todo.findOneAndDelete({ _id: todoId });

      res.send("The Todo was deleted");
    } catch (error) {
      console.log(`There was an error: ${error.message}`);
    }
  },

  // @route   PUT /todos/:id
  // @desc    Update todos by Id
  // @access  Private

  async TodosUpdate(req, res) {
    // Retrieve id parameter
    const todoId = req.params.id;

    // NOTE: Check ownership of the todo

    // Destructure Todo values from request body
    const { name, repeats, tags } = req.body;

    try {
      let todo = await Todo.findOneAndUpdate(
        { _id: todoId },
        { name, repeats, tags }
      );

      // Return a 404 error if activity is not found
      if (!todo) {
        return res
          .status(404)
          .json({ errors: [{ msg: "That todo is not registered" }] });
      }
      res.send("The todo was updated");
    } catch (error) {
      console.log(`There was an error: ${error.message}`);
    }
  },
};
