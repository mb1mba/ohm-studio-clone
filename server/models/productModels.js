const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productPrice: { type: Number, required: true },
  productVariants: [
    {
      name: { type: String, require: true },
      deliveryTime: { type: String, required: true },
      images: { type: Array, required: true },
      color: {
        name: { type: String },
        hex: { type: String },
      },
    },
  ],
  productDescription: { type: String, required: true },
  productDimensions: { type: Object, required: true },
  productMaterials: { type: String, required: true },
});

module.exports = mongoose.model("Product", productSchema);
