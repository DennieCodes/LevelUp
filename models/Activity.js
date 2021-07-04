import mongoose from "mongoose";
const { Schema } = mongoose;

const ActivitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = Activity = mongoose.model("activity", ActivitySchema);
