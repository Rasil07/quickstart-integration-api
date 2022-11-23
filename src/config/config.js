require('dotenv').config();

const config = {
  mongo_uri: process.env.MONGO_URI,
  db_name: process.env.MONGO_DB_NAME,
  port: process.env.PORT,
};

module.exports = config;
