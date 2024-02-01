require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

//@desc Refresh token
//@route POST /api/refresh
//@access private

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return res.sendStatus(401);

  const refreshToken = cookies.jwt;

  // evaluate jwt
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    async (err, decoded) => {
      const user = decoded.user;

      const foundUser = await User.findOne({ email: user.email });
      if (!foundUser) return res.status(403).json({ message: "Not found" });

      if (err || foundUser.email !== user.email) {
        return res.sendStatus(403);
      }
      const accessToken = jwt.sign(
        { user: decoded.user },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
      );
      res.json({ accessToken });
    }
  );
};

module.exports = handleRefreshToken;
