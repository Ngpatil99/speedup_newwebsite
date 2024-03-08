const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
      user: 'your_email@gmail.com',
      pass: 'your_email_password',
   },
});

app.post('/send-email', (req, res) => {
   const { name, email, message } = req.body;

   const mailOptions = {
      from: 'your_email@gmail.com',
      to: 'recipient_email@example.com',
      subject: `New Inquiry from ${name}`,
      text: message,
   };

   transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
         return res.status(500).send(error.toString());
      }
      res.status(200).send('Email sent: ' + info.response);
   });
});

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});
