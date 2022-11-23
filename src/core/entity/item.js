function Item({ itemId, name, description, status, _id }) {
  return {
    getId: () => _id,
    getName: () => name,
    getDescription: () => description,
    getStatus: () => status,
    getItemId: () => itemId,
  };
}

module.exports = Item;
