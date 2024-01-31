const express = require("express");
const router = express.Router();
const { registerUser, loginUser, currentUser } = require("../controllers/user");
const validateTokenHandler = require("../middlewares/validateTokenHandler");

router.post("/add", registerUser).post("/login", loginUser);

router.get("/current", validateTokenHandler, currentUser);

module.exports = router;
