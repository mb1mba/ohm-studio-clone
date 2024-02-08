require("dotenv").config();
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

//@desc Register
//@route POST /api/users/add
//@access public

const registerUser = asyncHandler(async (req, res) => {
  const { email, password, name } = req.body;
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400).json({
      message: "This email is already used. Please choose another one.",
    });
  }

  if (email.length === 0 || password.length === 0 || name.length === 0) {
    res.status(400).json({
      message: "Please make sure to provide your email, password, and name.",
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

//@desc Login
//@route POST /api/users/login
//@access public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: "Please provide an email and password" });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(400)
      .json({ message: "Please verify your email and password." });
  }

  try {
    const isMatch = await bcrypt.compare(password, user.password);
    if (user && isMatch) {
      const accessToken = jwt.sign(
        {
          user: {
            id: user._id,
            email: user.email,
            name: user.name,
            isAdmin: user.isAdmin,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "10m" }
      );

      const refreshToken = jwt.sign(
        {
          user: {
            id: user._id,
            email: user.email,
            name: user.name,
            isAdmin: user.isAdmin,
          },
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "1d" }
      );

      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });

      res.status(200).json({ accessToken });
    } else {
      res.status(401).json({
        message: "Unauthorized. Please verify your email and password.",
      });
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

//@desc Get user info by Id
//@route POST /api/users/:id
//@access private

const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

//@desc Get user all users
//@route POST /api/users
//@access private

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  const { user } = req;

  if (!user.isAdmin) {
    res.status(401).json({ message: "You are not authorized." });
  }

  if (users) {
    res.status(200).json(users);
  } else {
    res.status(404).json({ message: "Users not found" });
  }
});

//@desc Edit one user
//@route PUT /api/users/:id
//@access private

const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { user } = req;
  const { name, email, gender } = req.body;

  if (!user.isAdmin && user.id !== id) {
    res.status(401).json({ message: "You are not authorized." });
  }

  const currentUser = await User.findByIdAndUpdate(
    id,
    {
      $set: {
        name,
        email,
        gender,
      },
    },
    { new: true }
  );

  if (currentUser) {
    res.status(200).json(currentUser);
  } else {
    res.status(404).json({ message: "Users not found" });
  }
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
  getUserById,
  getUsers,
  updateUser,
};
