const mongoose = require("mongoose");
const { Schema } = mongoose;

const TodoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  repeats: {
    type: Boolean,
    default: false,
  },
  tags: [String],
  completed: {
    type: Boolean,
    default: false,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Todo = mongoose.model("todo", TodoSchema);
