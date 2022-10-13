const { Schema, model } = require("mongoose");

const giftSchema = new Schema({
  product: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  store: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: false,
    trim: true,
  },
  url: {
    type: String,
    required: true,
    trim: true,
  },
  imageUrl: {
    type: String,
    required: false,
    trim: true,
  },
});

const Gift = model("Gift", giftSchema);

module.exports = Gift;
