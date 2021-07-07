const mongoose = require("mongoose");
const { Schema } = mongoose;

const ActivitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
  },
  schedule: {
    type: Number,
  },
  dates: [Date],
  tags: [String],
});

module.exports = Activity = mongoose.model("activity", ActivitySchema);

// schedule
