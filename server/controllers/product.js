const asyncHandler = require("express-async-handler");
const Product = require("../models/productModels");

const createProduct = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const files = req.files;
  // Check if the product already exists
  const productExist = await Product.findOne({ name });

  if (productExist) {
    return res.status(400).json({ message: "This product already exists" });
  }

  try {
    // Create a new product with the generated productId
    const newProduct = await Product.create({
      ...req.body,
      images: files?.map((file) => file.path),
    });
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

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  if (products) {
    res.status(200).json(products);
  } else {
    res.status(400).json({ message: "No products found." });
  }
});

module.exports = { createProduct, getProducts };
