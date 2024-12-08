function organizeInventory(inventory) {
  const organized = {};

  for (const { category, name, quantity } of inventory) {
    organized[category] = organized[category] || {};

    organized[category][name] = (organized[category][name] || 0) + quantity;
  }

  return organized;
}

module.exports = { organizeInventory };
