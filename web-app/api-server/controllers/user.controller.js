const User = require("../models/User");
const CryptoJS = require("crypto-js");

// Get user by id
exports.getUserById = async (req, res) => {
  try {
    let id = req.params.id;
    if (id) {
      const user = await User.findById(id);
      const { password, ...info } = user._doc; // Hide password field
      if (user) {
        return res.status(200).json({
          success: true,
          item: info,
          errorCode: null,
          errorMessage: null,
        });
      } else {
        return res.status(404).json({
          success: false,
          errorCode: null,
          errorMessage: "Cannot find user!",
        });
      }
    } else {
      return res.status(402).json({
        success: false,
        errorCode: null,
        errorMessage: "This field is empty!",
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      errorCode: err.code,
      errorMessage: err.message,
    });
  }
};

// Find user with email address
exports.getUserByEmail = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (user) {
      const { password, ...info } = user._doc; // Hide password field
      return res.status(200).json({
        success: true,
        item: info,
        errorCode: null,
        errorMessage: null,
      });
    } else {
      return res.status(401).json({
        success: false,
        errorCode: null,
        errorMessage: "Wrong email address!",
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      errorCode: err.code,
      errorMessage: err.message,
    });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json({
      success: true,
      items: users,
      total: users.length,
      errorCode: null,
      errorMessage: null,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      items: null,
      errorCode: err.code,
      errorMessage: err.message,
    });
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
        errorCode: null,
        errorMessage: null,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        errorCode: err.code,
        errorMessage: err.message,
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
exports.deleteUser = async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id).then(() => {
        return res.status(200).json({
          success: true,
          errorCode: null,
          errorMessage: "User has been deleted!",
        });
      })
      .catch((err) => {
        return res.status(404).json({
          success: false,
          errorCode: err.code,
          errorMessage: err.message,
        });
      })
    } catch (err) {
      return res.status(500).json({
        success: false,
        errorCode: err.code,
        errorMessage: err.message,
      });
    }
  } else {
    res.status(403).json("You can delete only your account!");
  }
};
