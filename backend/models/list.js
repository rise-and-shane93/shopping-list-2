const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listSchema = new Schema({
  categoryAndItemList: [{
    // type: String,
    // required: true
    categoryName: {type: String, required: true},
    items: [{type: String, required: true}]
  }]/*,
  itemList: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }*/
});

module.exports = mongoose.model('Product', productSchema);