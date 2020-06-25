const nodemailer = require("nodemailer");

async function main() {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "afton.spencer@ethereal.email",
      pass: "jMBeQ5bngrxatHsyfj"
    }
  });

  let info = await transporter.sendMail({
    from: '"Fred foo" <food@example.com>',
    to: "preston159@gmail.com",
    subject: "Hello",
    text: "Hi there",
    html: "<p>hi there</p>"
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);
