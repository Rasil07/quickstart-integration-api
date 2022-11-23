const mondayController = require('../../../application/controllers/monday-controller');
const mondayRouter = (express, middlewares) => {
  const router = express.Router();

  router.post('/monday/execute_action', middlewares.authenticationMiddleware, mondayController.executeAction);
  router.post(
    '/monday/get_remote_list_options',
    middlewares.authenticationMiddleware,
    mondayController.getRemoteListOptions
  );
  return router;
};

module.exports = mondayRouter;
