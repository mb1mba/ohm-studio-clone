const asyncHandler = require("express-async-handler");
const { Product } = require("../models/productModels");
const uuid = require("uuid");
const productId = uuid.v4();

const createProduct = asyncHandler(async (req, res) => {
  const { productName } = req.body;

  const productExist = await Product.findOne({ productName });

  if (productExist) {
    res.status(400).json({ message: "This product already exist" });
  }

  try {
    const newProduct = await Product.create({
      ...req.body,
      variantId: productId,
    });
    if (newProduct) {
      res.status(201).json(newProduct);
    } else {
      res.status(400).json({ message: "Invalid product data" });
    }
  } catch (error) {
    res.status(500).send;
  }
});

module.exports = { createProduct };
