const Item = require('../../../core/entity/item');

function updateItem(id, { itemId, name, description, status }, dbRepository) {
  const item = Item({
    itemId,
    name,
    description,
    status,
  });

  return dbRepository.updateItem(id, item);
}

module.exports = updateItem;
