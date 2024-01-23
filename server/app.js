const express = require("express");
const connectDB = require("./config/db");
const products = require("./routes/product");
const app = express();

connectDB();
app.use("/api/products", products);
app.listen(5000, () => {
  console.log(`Listening server ${5000}`);
});
