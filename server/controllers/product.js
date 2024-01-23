const asyncHandler = require("express-async-handler");
const Product = require("../models/productModels");

const createProduct = asyncHandler(async (req, res) => {
  const { productName } = req.body;

  // Check if the product already exists
  const productExist = await Product.findOne({ name: productName });

  if (productExist) {
    return res.status(400).json({ message: "This product already exists" });
  }

  try {
    // Create a new product with the generated productId
    const newProduct = await Product.create(req.body);
    if (newProduct) {
      res.status(201).json(newProduct);
    } else {
      res.status(400).json({ message: "Invalid product data" });
    }
  } catch (error) {
    // Handle errors and send a specific error message
    res.status(500).send(error.message);
  }
});

module.exports = { createProduct };
