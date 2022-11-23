const mongoose = require('mongoose');

const connectMongoDb = (config) => {
  console.log('connecting MongoDb');
  return mongoose.connect(config.mongo_uri, {
    dbName: config.db_name,
  });
};

module.exports = { connect: connectMongoDb };
