const express = require("express");
const router = express.Router();
const authUserController = require("../controllers/auth.user.controller");

// Verify email address
router.get("/email-verification/:email", authUserController.verifyEmail);
// Register
router.post("/register", authUserController.register);
// Login
router.post("/login", authUserController.login);

module.exports = router;