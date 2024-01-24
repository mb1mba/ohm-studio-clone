require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const products = require("./routes/product");
const app = express();
connectDB();

const corsOptions = {
  origin: `http://localhost:5173`,
  allowedHeaders: ["sessionID", "Authorization", "Content-Type"],
  credentials: true,
  optionsSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(cors(corsOptions));

app.listen(5500, () => {
  console.log(`Listening server ${5500}`);
});

app.use("/api/products", products);
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
