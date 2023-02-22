const express = require("express");
const router = express.Router();
const authUserController = require("../controllers/auth.user.controller");

// Verify email address
// Register
router.post("/register", authUserController.register);
// Login
router.post("/login", authUserController.login);

module.exports = router;