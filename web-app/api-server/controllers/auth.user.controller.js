require("dotenv").config();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const sendMailVerification = require("../supports/sendMailVerification");
const mailOptions = require("../config/nodemailerConfig");

// Get a hash-value-of-email form params and decryption
exports.verifyEmail = async (req, res) => {
  let email = req.params.email;
  if (email) {
    // Find user with email
    let user = await User.findOne({ email: email });
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
      return res.status(404).json({
        success: false,
        errorCode: err.code,
        errorMessage: "User not found!",
      });
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
      errorCode: '400',
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
        // Send verify email
        await sendMailVerification(mailOptions(user.email))
          .then(() => {
            return res.status(200).json({
              success: true,
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
      if (user.isActive) {
        const bytes = CryptoJS.AES.decrypt(
          user.password,
          process.env.SECRET_KEY
        );
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
        return res.status(401).json({
          success: false,
          errorCode: "401",
          errorMessage: "Please verify your email address!",
        });
      }
    } else {
      return res.status(404).json({
        success: false,
        errorCode: "404",
        errorMessage: "User don't exist!",
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
