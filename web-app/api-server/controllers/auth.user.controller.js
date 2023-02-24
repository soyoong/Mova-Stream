require("dotenv").config();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const sendMailVerification = require("../supports/sendMailVerification");
const mailOptions = require("../config/nodemailerConfig");

// Get a hash-value-of-email form params and decryption
exports.verifyEmail = async (req, res) => {
  let code = req.params.code;
  if (code) {
    let bytes = CryptoJS.AES.decrypt(code, process.env.SECRET_KEY);
    let originalEmail = bytes.toString(CryptoJS.enc.Utf8);
    return res.send(originalEmail);
  } else {
    console.log("Verify with error!");
    return res.send("Error");
  }
};

// Create / Register User
exports.register = async (req, res) => {
  // Validate form
  if (!req.body.username || !req.body.email || !req.body.password) {
    res
      .status(400)
      .json({ success: false, message: "Content can't be empty!" });
    return;
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
            return res.status(200).json({
              success: true,
              message: "An email has been sent!",
            });
          })
          .catch((err) => {
            console.log(`Try to verify with error: ${err.message}`);
            return res.status(500).json({
              success: false,
              code: err.code,
              message: `Try to verify with error: ${err.message}`,
            });
          });
      }
    } catch (err) {
      console.log(`Error: ${err.message}`);
      return res.status(500).json({
        success: false,
        message: `Error: ${err.message}`,
      });
    }
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user &&
      res.status(401).json({
        success: false,
        message: "Wrong password or username!",
      });
    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
    originalPassword !== req.body.password &&
      res.status(401).json({
        success: false,
        message: "Wrong password or username!",
      });
    const authToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );
    const { password, ...info } = user._doc;
    return res.status(200).json({
      success: true,
      ...info,
      "authToken": `${authToken}`,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
