const express = require("express");
const router = express.Router();

// controller functions
const {
  TodosCreate,
  TodosGetById,
  TodosDelete,
  TodosUpdate,
} = require("../controllers/todos");

// Express validation middleware
const validator = require("../middleware/validator");
const isAuth = require("../middleware/isAuth");

// @route   POST /todos
// @desc    Create or Update Activity
// @access  Public

router.post("/", isAuth, validator(["nameRequired"]), TodosCreate);

// @route   GET /todos/:id
// @desc    Get todo by id
// @access  Private

router.get("/:id", isAuth, TodosGetById);

// @route   DELETE /todos/:id
// @desc    Delete todo by id
// @access  Private

router.delete("/:id", isAuth, TodosDelete);

// @route   PUT /todos/:id
// @desc    Update todo by id
// @access  Private

router.put("/:id", isAuth, TodosUpdate);

module.exports = router;
