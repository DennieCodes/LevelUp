const Activity = require("../models/Activity");

const { validationResult } = require("express-validator");

module.exports = {
  // @route   POST /activities
  // @desc    Create a new activity
  // @access  Public

  async ActivitiesCreate(req, res) {
    // Search for errors from express-validation
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Destructure values from request object
    const { name, description, schedule, tags } = req.body;
    const author = req.session.user_id;

    // date will be updated by app

    try {
      // Construct new Activity object
      const activity = new Activity({
        name,
        description,
        schedule,
        tags,
        author,
      });

      // Save new Activity item to Database
      await activity.save();

      res.send("New Activity was created");
    } catch (error) {
      console.error(error.message);
      return res.status(500).send("Server Error");
    }
  },

  // @route   GET /activities/:id
  // @desc    Get Activities by Id
  // @access  Private

  async ActivitiesGetById(req, res) {
    // Retrieve id parameter
    const activityId = req.params.id;

    // Search database for matching activity
    try {
      const activity = await Activity.findOne({ _id: activityId });

      // Return a 404 error if user is not found
      if (!activity) {
        return res
          .status(404)
          .json({ errors: [{ msg: "That activity is not registered" }] });
      }

      // Return activity by Id
      res.json(activity);
    } catch (error) {
      console.log(`There was an error: ${error.message}`);
    }
  },

  // @route   DELETE /activities/:id
  // @desc    Delete Activities by Id
  // @access  Private

  async ActivitiesDelete(req, res) {
    // Retrieve id parameter
    const activityId = req.params.id;

    // --------------------------
    // NOTE: will need to check id matches authenticated user

    // Search database for activity
    try {
      let activity = await Activity.findOne({ _id: activityId });

      // Return a 404 error if user is not found
      if (!activity) {
        return res
          .status(404)
          .json({ errors: [{ msg: "That activity is not registered" }] })
          .send("That activity is not registered");
      }

      // Delete User
      activity = await Activity.findOneAndDelete({ _id: activityId });

      res.send("The Activity was deleted");
    } catch (error) {
      console.log(`There was an error: ${error.message}`);
    }
  },

  // @route   PUT /activities/:id
  // @desc    Update Activities by Id
  // @access  Private

  async ActivitiesUpdate(req, res) {
    // Retrieve id parameter
    const activityId = req.params.id;

    // NOTE: Check ownership of the activity

    // Destructure request body
    const { name, description, schedule, tags } = req.body;

    try {
      let activity = await Activity.findOneAndUpdate(
        { _id: activityId },
        { name, description, schedule, tags }
      );

      // Return a 404 error if activity is not found
      if (!activity) {
        return res
          .status(404)
          .json({ errors: [{ msg: "That activity is not registered" }] });
      }
      res.send("The activity was updated");
    } catch (error) {
      console.log(`There was an error: ${error.message}`);
    }
  },
};
