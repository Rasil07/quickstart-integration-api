const itemRouter = require('./item');
const mondayRouter = require('./monday');
const healthCheck = require('./health');

const routes = (app, express, middlewares) => {
  app.use('/item', itemRouter(express, middlewares));
  app.use('/monday', mondayRouter(express, middlewares));
  app.use('/', healthCheck(express));
};

module.exports = routes;
