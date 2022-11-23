const ItemController = require('../../../application/controllers/item-controller');
const itemRepositoryAdapter = require('../../../application/repositoryAdapters/item');
const itemDBRepository = require('../../../framework/database/mongodb/repositories/item-repository');

const itemRouter = (express, middlewares) => {
  const router = express.Router();

  const itemController = ItemController(itemRepositoryAdapter, itemDBRepository);

  router.post('/item-field-definition', middlewares.authenticationMiddleware, itemController.getRemoteFieldDefs);
  router.get('/list', itemController.listItems);
  router.post('/create-edit', middlewares.authenticationMiddleware, itemController.createOrEdit);

  return router;
};

module.exports = itemRouter;
