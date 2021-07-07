const express = require("express");
const router = express.Router();

const {
  ActivitiesCreate,
  ActivitiesGetById,
  ActivitiesDelete,
  ActivitiesUpdate,
} = require("../controllers/activities");

// Express validation middleware
const validator = require("../middleware/validator");
const isAuth = require("../middleware/isAuth");

// @route   POST /activities
// @desc    Create or Update Activity
// @access  Public

router.post(
  "/",
  isAuth,
  validator([
    "nameRequired",
    "descriptionRequired",
    "scheduleRequired",
    "tagsRequired",
  ]),
  ActivitiesCreate
);

// @route   GET /activities/:id
// @desc    Retrieve an activity by Id
// @access  Public

router.get("/:id", isAuth, ActivitiesGetById);

// @route   DELETE /activities/:id
// @desc    Delete an activity by Id
// @access  Public

router.delete("/:id", isAuth, ActivitiesDelete);

// @route   PUT /activities/:id
// @desc    Update an activity
// @access  Public

router.put("/:id", isAuth, ActivitiesUpdate);

module.exports = router;
