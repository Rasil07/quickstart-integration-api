function itemRepositoryAdapter(dbRepository) {
  const listItems = (params) => dbRepository.listItems(params);
  const findOneByItemId = (itemId) => dbRepository.findOneByItemId(itemId);
  const store = (item) => dbRepository.store(item);
  const updateItem = (id, item) => dbRepository.updateItem(id, item);

  return {
    listItems,
    findOneByItemId,
    store,
    updateItem,
  };
}

module.exports = itemRepositoryAdapter;
