const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fentanesink@gmail.com',
    pass: 'micv hrod wafc ghqz'
  }
});

const mailOptions = {
  from: 'fentanesink@gmail.com',
  to: 'rodrigo.fentanes@hotmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;

