const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const mongooseParameters = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

const connectMongoDatabase = async () => {
  try {
    await mongoose.connect(db, mongooseParameters);
    console.log("Mongo Database Connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectMongoDatabase;
