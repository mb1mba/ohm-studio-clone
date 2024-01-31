require("dotenv").config();
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400).json({
      message: "This email is already used. Please choose another one.",
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ ...req.body, password: hashedPassword });
    if (user) {
      res.status(201).json(user);
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch {
    res.status(500).send();
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: "Please provide an email and password" });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ error: "Cannot find user" });
  }

  try {
    const isMatch = await bcrypt.compare(password, user.password);
    if (user && isMatch) {
      const accessToken = jwt.sign(
        {
          user: {
            id: user._id,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "10m" }
      );

      // const refreshToken = jwt.sign(
      //   {
      //     user: {
      //       id: user._id,
      //     },
      //   },
      //   process.env.REFRESH_TOKEN_SECRET,
      //   { expiresIn: "1d" }
      // );

      // res.cookie("jwt", refreshToken, {
      //   httpOnly: true,
      //   maxAge: 24 * 60 * 60 * 1000,
      // });

      res.status(200).json({ accessToken });
    } else {
      res.status(401).json({ error: "Unauthorized" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//@desc Current user info
//@route POST /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
