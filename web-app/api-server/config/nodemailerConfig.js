require("dotenv").config();


const mailOptions = (mailTo, cryptoEmail) => {
  let config = {
    from: process.env.ADMIN_EMAIL_ADDRESS,
    to: mailTo,
    subject: "Mova Stream",
    text: `Click to verify: http://localhost:8800/api/auth/email-verification/${cryptoEmail}`,
  };

  return config;
};

module.exports = mailOptions;