const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const verify = require("../supports/verifyToken");

// Get user by userId
router.get("/:id", verify, userController.getUserById);

// Get all user
router.get("/", verify, userController.getAllUsers);

// Update user by userId
router.put("/:id", verify, userController.updateUser);

module.exports = router;