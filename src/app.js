const express = require('express');
const expressConfig = require('./framework/webserver/express');
const serverConfig = require('./framework/webserver/server');
const routes = require('./framework/router');
const database = require('./framework/database/mongodb');
const middleware = require('./application/middlewares');
const config = require('./config/config');

const app = express();

expressConfig(app);
serverConfig(app, config, database).startServer();

routes(app, express, middleware);

module.exports = app;
