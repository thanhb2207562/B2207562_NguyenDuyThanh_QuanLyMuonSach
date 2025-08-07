require("dotenv").config(); 

const config = {
  app: {
    port: process.env.PORT || 3000,
  },

  db: {
    uri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/LibraryDB",
  },

  jwt: {
    secret: process.env.JWT_SECRET || "SECRET_KET",
  },
};

module.exports = config;
