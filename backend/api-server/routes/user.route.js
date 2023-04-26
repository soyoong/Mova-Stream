const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const verify = require("../supports/verifyToken");

// Get user by userId
router.get("/find/:id", verify, userController.getUserById);

// Get all user
router.get("/", verify, userController.getAllUsers);

// Update user by userId
router.put("/find/:id", verify, userController.updateUserWithId);

// Update user with email
router.put("/find/email/:email", verify, userController.updateUserWithEmail);

// Find user by email
router.get("/find/email/:email", userController.getUserByEmail);

router.delete("/:id", verify, userController.deleteUser);

module.exports = router;