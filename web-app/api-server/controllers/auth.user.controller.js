require("dotenv").config();
const axios = require("axios");
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const sendMailVerification = require("../supports/sendMailVerification");
const mailOptions = require("../config/nodemailerConfig");
const { response } = require("express");

// Get a hash-value-of-email form params and decryption
exports.verifyEmail = async (req, res) => {
  let code = req.params.code;
  if (code) {
    let bytes = CryptoJS.AES.decrypt(code, process.env.SECRET_KEY);
    let originalEmail = bytes.toString(CryptoJS.enc.Utf8);
    // Find user with email
    let user = await User.findOne({ email: originalEmail });
    if (user) {
      if (!user.isActive) {
        // Update active
        await User.findByIdAndUpdate(user.id, {
          $set: { isActive: true },
        })
          .then(() => {
            return res.status(200).json({
              success: true,
              message: "User verify successfully!",
            });
          })
          .catch((err) => {
            return res.status(500).json({
              success: false,
              errorCode: err.code,
              errorMessage: err.message,
            });
          });
      } else {
        return res.status(200).json({
          success: true,
          message: "User already verified!",
        });
      }
    } else {
      return res
        .status(404)
        .json({ success: false, message: "User not found!" });
    }
  } else {
    console.log("Verify with error!");
    return res.send("Error");
  }
};

// Create / Register User
exports.register = async (req, res) => {
  // Validate form
  if (!req.body.username || !req.body.email || !req.body.password) {
    return res.status(400).json({
      success: false,
      errorCode: null,
      errorMessage: "Content can't be empty!",
    });
  } else {
    var newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString(),
      isAdmin: req.body.isAdmin,
    });

    try {
      let user = await newUser.save();
      if (!user.isActive) {
        const cryptoEmail = CryptoJS.AES.encrypt(
          user.email,
          process.env.SECRET_KEY
        ).toString();

        await sendMailVerification(mailOptions(user.email, cryptoEmail))
          .then(() => {
            const { password, ...info } = user._doc;
            return res.status(200).json({
              success: true,
              item: info,
              message: "An email has been sent!",
            });
          })
          .catch((err) => {
            return res.status(500).json({
              success: false,
              errorCode: err.code,
              errorMessage: `Try to verify with error: ${err.message}`,
            });
          });
      }
    } catch (err) {
      return res.status(500).json({
        success: false,
        errorCode: err.code,
        errorMessage: `Error: ${err.message}`,
      });
    }
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
      const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
      if (originalPassword !== req.body.password) {
        return res.status(401).json({
          success: false,
          errorCode: null,
          errorMessage: "Wrong password!",
        });
      } else {
        const authToken = jwt.sign(
          { id: user._id, isAdmin: user.isAdmin },
          process.env.SECRET_KEY,
          { expiresIn: "5d" }
        );
        const { password, ...info } = user._doc;
        return res.status(200).json({
          success: true,
          item: info,
          authToken: `${authToken}`,
        });
      }
    } else {
      return res.status(404).json({
        success: false,
        errorCode: "404",
        errorMessage: "Wrong email or password!",
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
