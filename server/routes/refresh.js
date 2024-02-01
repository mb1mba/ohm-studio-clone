const expres = require("express");
const router = expres.Router();
const handleRefreshToken = require("../controllers/refreshToken");

router.get("/", handleRefreshToken);

module.exports = router;
