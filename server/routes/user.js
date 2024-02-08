const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  currentUser,
  getUserById,
  getUsers,
  updateUser,
  updateUserPassword,
} = require("../controllers/user");

const validateTokenHandler = require("../middlewares/validateTokenHandler");

router.post("/add", registerUser).post("/login", loginUser);

router.use(validateTokenHandler);

router.get("/current", currentUser).get("/:id", getUserById).get("/", getUsers);

router.put("/:id", updateUser).put("/:id/password", updateUserPassword);

module.exports = router;
