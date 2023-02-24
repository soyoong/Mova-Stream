const User = require("../models/User");
const CryptoJS = require("crypto-js");

// Get user by id
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...info } = user._doc; // Hide password field
    if (user) {
      res.status(200).json({
        success: true,
        item: info,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Cannot find user!",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      code: err.code,
      message: err.message,
    });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  const query = req.query.new;
  if (req.user.isAdmin) {
    try {
      const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed to see all users!");
  }
};

// Update user
exports.updateUser = async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      const { password, ...info } = updatedUser._doc;

      return res.status(200).json({
        success: true,
        item: info,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
        code: err.code,
      });
    }
  } else {
    return res.status(403).json({
      success: false,
      message: "You can update only your account!",
    });
  }
};

// Delete
exports.deleteUser = (req, res) => {};
