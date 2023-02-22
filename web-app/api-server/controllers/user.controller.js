const User = require("../models/User");

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
exports.updateUser = async (req, res) => {};

// Delete
exports.deleteUser = (req, res) => {};
