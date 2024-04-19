// models/Item.js

const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  name: String,
  description: String
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
