const Item = require('../../../core/entity/item');

function findByItemId({ itemId }, dbRepository) {
  const item = Item({ itemId });

  return dbRepository.findOneByItemId(item.getItemId());
}

module.exports = findByItemId;
