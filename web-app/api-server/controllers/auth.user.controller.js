require("dotenv").config();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const sendMailVerification = require("../supports/sendMailVerification");
const mailOptions = require("../config/nodemailerConfig");

// Create / Register User
exports.register = async (req, res) => {
  // Validate form
  if (!req.body.username || !req.body.email || !req.body.password) {
    res
      .status(400)
      .json({ success: false, message: "Content can not be empty!" });
    return;
  } else {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString(),
      isAdmin: req.body.isAdmin,
    });

    try {
      // await newUser
      //   .save()
      //   .then(() => {
      //     const { password, ...info } = newUser._doc;
      //     res.status(200).json({
      //       success: true,
      //       item: info,
      //     });
      //   })
      //   .catch((err) => {
      // console.log(`Save error: ${err.message}`);
      // res.status(500).json({
      //   success: false,
      //   code: err.code,
      //   message: `Save error: ${err.message}`,
      // });
      //   });

      await sendMailVerification(mailOptions(newUser.email))
        .then(() => {
          console.log("Email has been sent!");
          res.status(200).json({
            success: true,
            message: "Email has been sent!",
          });
        })
        .catch((err) => {
          console.log(`Verify error: ${err.message}`);
          res.status(500).json({
            success: false,
            code: err.code,
            message: `Verify error: ${err.message}`,
          });
        });

    } catch (err) {
      console.log(`Try with error: ${err.message}`);
      res.status(500).json({
        success: false,
        message: `Try with error: ${err.message}`,
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

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );

    const { password, ...info } = user._doc;

    res.status(200).json({
      success: true,
      ...info,
      accessToken,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
