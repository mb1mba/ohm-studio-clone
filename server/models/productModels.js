const mongoose = require("mongoose");
const uuid = require("uuid");

function generateVariantId() {
  return uuid.v4(); // Generates a random UUID
}

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productPrice: { type: Number, required: true },
  productVariants: [
    {
      variantId: { type: String, unique: true },
      deliveryTime: { type: Number, required: true },
      images: { type: Array, required: true },
      color: { type: String, required: true },
    },
  ],
  productDescription: { type: String, required: true },
  productDimensions: { type: Object, required: true },
  productMaterials: { type: String, required: true },
});

module.exports = mongoose.model("Product", productSchema);
