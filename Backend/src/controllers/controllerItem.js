itemCtrl = {};

const Item = require('../models/Item');

//Get Items
itemCtrl.getItem = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};
// Post Items
itemCtrl.createItem = async (req, res) => {
  const { name } = req.body;
  const newItem = new Item({
    name: name,
  });
  await newItem.save();

  //console.log(newItem);
  //  res.json({ message: 'Item Saved' });
  res.json(newItem);
};

//Delete
itemCtrl.deleteItem = async (req, res) => {
  //console.log(req.params);
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    res.json(item);
  } catch (error) {
    res.json({ message: 'Item does not exist' });
  }
};

module.exports = itemCtrl;
