// Configure and connect Express
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Connect Mongoose (MongoDB)
const connectMongoDatabase = require("./config/connectMongoDatabase");
connectMongoDatabase();

// Initialize express middleware
app.use(express.json({ extended: false }));

// Connect Express Session and MongoDB Session
const connectExpressSession = require("./config/connectExpressSession");
app.use(connectExpressSession());

// Define route controllers
app.get("/", (req, res) => {
  res.send("API running");
});

app.use("/users", require("./routes/users"));
app.use("/todos", require("./routes/todos"));
app.use("/activities", require("./routes/activities"));

app.listen(port, () => {
  console.log("Server started listening at port: ", port);
});
