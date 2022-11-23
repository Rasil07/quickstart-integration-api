const Item = require('../../../core/entity/item');

function store({ itemId, name, description, status }, dbRepository) {
  const item = Item({
    itemId,
    name,
    description,
    status,
  });
  console.log(
    'use case',
    {
      itemId,
      name,
      description,
      status,
    },
    item
  );

  return dbRepository.store(item);
}

module.exports = store;
