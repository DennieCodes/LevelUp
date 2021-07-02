// Configure and connect Express
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Connect Mongoose (MongoDB)

const connectMongoDatabase = require("./config/connectMongoDatabase");
connectMongoDatabase();

// Initialize middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("App is running");
});

app.listen(port, () => {
  console.log("Server started listening at port: ", port);
});
