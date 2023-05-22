const nodemailer = require("nodemailer");
let sendMail = async(subject,text,...email)=>{
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    }
  });
  
  var mailOptions = {
    from: process.env.USER,
    to: email,
    subject: subject,
    html: text
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

module.exports = sendMail;