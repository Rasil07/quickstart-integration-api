const ItemModel = require('../models/Item');

function itemRepository() {
  const listItems = async (params) => {
    return ItemModel.find();
  };

  const findOneByItemId = async (itemId) => {
    return ItemModel.findOne({ itemId });
  };

  const store = async (item) => {
    const newItem = new ItemModel({
      name: item.getName(),
      description: item.getDescription(),
      status: item.getStatus(),
      itemId: item.getItemId(),
    });

    return newItem.save();
  };

  const updateItem = async (id, item) => {
    return ItemModel.findByIdAndUpdate(
      id,
      {
        name: item.getName(),
        description: item.getDescription(),
        status: item.getStatus(),
        itemId: item.getItemId(),
      },
      {
        new: 1,
      }
    );
  };
  return {
    listItems,
    store,
    findOneByItemId,
    updateItem,
  };
}

module.exports = itemRepository;
