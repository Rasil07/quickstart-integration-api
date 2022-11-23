const ItemUseCase = require('../use-cases/item');

function ItemController(itemRepositoryAdapter, itemDbRepository) {
  const dbRepo = itemRepositoryAdapter(itemDbRepository());

  //https://developer.monday.com/apps/docs/dynamic-mapping#response-format for reference
  const getRemoteFieldDefs = (req, res) => {
    console.log('get remote fields');
    return res.status(200).send([
      {
        id: 'name',
        title: 'Name',
        outboundType: 'text',
        inboundTypes: ['text', 'text_array'],
        required: true,
      },
      {
        id: 'description',
        title: 'Description',
        outboundType: 'text',
        inboundTypes: ['text', 'text_array'],
        required: true,
      },
      {
        id: 'status',
        title: 'Status',
        outboundType: 'text',
        inboundTypes: ['text'],
        required: true,
      },
    ]);
  };

  const listItems = async (req, res) => {
    const list = await ItemUseCase.listItems({}, dbRepo);
    res.status(200).send({
      data: list,
    });
  };

  const createOrEdit = async (req, res) => {
    const {
      itemId,
      itemViewField: { name, description, status },
    } = req.body.payload.inputFields;

    let item = await ItemUseCase.findByItemId({ itemId }, dbRepo);
    if (!item) {
      item = await ItemUseCase.store({ itemId, name, description, status }, dbRepo);
    } else {
      item = await ItemUseCase.updateItem(item._id, { itemId, name, description, status }, dbRepo);
    }
    return res.status(200).send({ message: 'Saved' });
  };

  return {
    listItems,
    getRemoteFieldDefs,
    createOrEdit,
  };
}

module.exports = ItemController;
