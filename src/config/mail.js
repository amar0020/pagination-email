
const nodemailer = require("nodemailer")





let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "7e1be1b6deb956", // generated ethereal user
      pass: "9a74db73eb622a", // generated ethereal password
    },
  });


module.exports = transporter