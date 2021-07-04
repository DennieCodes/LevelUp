import mongoose from "mongoose";
const { Schema } = mongoose;

const TodoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = Todo = mongoose.model("todo", TodoSchema);
