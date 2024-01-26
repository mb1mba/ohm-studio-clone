const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const {
  createProduct,
  getProducts,
  getProduct,
} = require("../controllers/product");

router.post("/add", upload.array("images"), createProduct);
router.get("/", getProducts);
router.get("/:productName", getProduct);

module.exports = router;
