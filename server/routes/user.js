const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  currentUser,
  getUserById,
} = require("../controllers/user");
const validateTokenHandler = require("../middlewares/validateTokenHandler");

router.post("/add", registerUser).post("/login", loginUser);

router
  .get("/current", validateTokenHandler, currentUser)
  .get("/:id", getUserById);

module.exports = router;
