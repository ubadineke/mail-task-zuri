const express = require ('express')
const app = express();
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

app.get('/', (req, res) => {
    res.send({"Running":"Up Work"})
})

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.tempMail,
        pass: process.env.tempPass,
        clientId: process.env.clientId,
        clientSecret: process.env.clientSecret,
        refreshToken: process.env.refreshToken
    }
  });

  let mailOptions = {
    from:process.env.senderMail,
    to: process.env.tempMail,
    subject: 'Nodemailer Project',
    text: 'Hi from your nodemailer project'
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
