const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: Array },
  description: { type: String, required: true },
  deliveryTime: { type: String, required: true },
  variants: [
    {
      name: { type: String },
      color: { type: String },
    },
  ],
  info: {
    description: { type: String, required: true },
    dimensions: { type: Object, required: true },
    materials: { type: String, required: true },
  },
});

module.exports = mongoose.model("Product", productSchema);
