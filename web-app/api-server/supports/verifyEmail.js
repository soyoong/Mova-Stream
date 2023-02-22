const nodemailer = require("nodemailer");
const { OAuth2Client } = require("google-auth-library");
const dotenv = require("dotenv");

dotenv.config();

const myOAuth2Client = new OAuth2Client(
  process.env.GOOGLE_MAILER_CLIENT_ID,
  process.env.GOOGLE_MAILER_CLIENT_SECRET
);

myOAuth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_MAILER_REFRESH_TOKEN,
});

module.exports.verifyEmailAddress = async function verifyEmailAddress() {
  // Check form
  try {
    /**
     * Lấy AccessToken từ RefreshToken (bởi vì Access Token cứ một khoảng thời gian ngắn sẽ bị hết hạn)
     * Vì vậy mỗi lần sử dụng Access Token, chúng ta sẽ generate ra một thằng mới là chắc chắn nhất.
     */
    const myAccessTokenObject = await myOAuth2Client.getAccessToken();
    // Access Token sẽ nằm trong property 'token' trong Object mà chúng ta vừa get được ở trên
    const myAccessToken = myAccessTokenObject?.token;

    // Tạo một biến Transport từ Nodemailer với đầy đủ cấu hình, dùng để gọi hành động gửi mail
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.ADMIN_EMAIL_ADDRESS,
        clientId: process.env.GOOGLE_MAILER_CLIENT_ID,
        clientSecret: process.env.GOOGLE_MAILER_CLIENT_SECRET,
        refresh_token: process.env.GOOGLE_MAILER_REFRESH_TOKEN,
        accessToken: myAccessToken,
      },
    });

    // mailOption là những thông tin gửi từ phía client lên thông qua API
    const mailOptions = {
      to: "huuhau.hh47@gmail.com", // Gửi đến ai?
      subject: "Mova Stream", // Tiêu đề email
      text: "Hello World!",
    };

    // Gọi hành động gửi email
    await transport.sendMail(mailOptions, function (err, res) {
      if (err) {
        res.status(401).json({
          success: false,
          message: "An error occurred, please try again.!",
          code: `Error: ${err.code}`,
        });
        console.log(`Error 1: ${err.message}`);
      } else {
        res.status(200).json({
          success: true,
          message: `${response}`,
        });
        console.log("Email sent successfully.!");
      }
    });
  } catch (error) {
    // Có lỗi thì các bạn log ở đây cũng như gửi message lỗi về phía client
    console.log(error);
    res.status(500).json({ errors: error.message });
  }
};
