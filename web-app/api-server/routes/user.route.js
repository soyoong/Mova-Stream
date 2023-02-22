const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const verify = require("../supports/verifyToken");

// Get user by userId
router.get("/:id", verify, userController.getUserById);

// Get all user
router.get("/", verify, userController.getAllUsers);

module.exports = router;