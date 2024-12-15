// const fs = require('fs');  // This is the same then bellow code
// import * as fs from 'fs';

// console.log('Uuuuui!');

// const words = ['unicorn', 'cupcake', 'rainbow'];
// const output = words.join('\n');
// fs.writeFile('words.txt', output, fileWritten);

// function fileWritten() {
//   console.log('File written!');
// }

function sendEmail() {
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
  
  
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}