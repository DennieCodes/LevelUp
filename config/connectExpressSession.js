const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const config = require("config");
const sessionPhrase = config.get("sessionPhrase");
const { v4: uuidv4 } = require("uuid");
const db = config.get("mongoURI");

// Set up MongoDBStore
const store = new MongoDBStore({
  uri: db,
  collections: "sessions",
});

const connectExpressSession = () => {
  return session({
    secret: sessionPhrase,
    resave: false,
    saveUninitialized: false,
    store: store,
    genid: (req) => {
      return uuidv4();
    },
  });
};

module.exports = connectExpressSession;
