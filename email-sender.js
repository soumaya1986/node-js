const nodemailer = require("nodemailer");

// Créer un transporteur
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

// Définir les options de l'e-mail
let mailOptions = {
  from: "your-email@gmail.com",
  to: "recipient-email@gmail.com",
  subject: "Test Email",
  text: "Hello, this is a test email sent from Node.js",
};

// Envoyer l'e-mail
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Email sent: " + info.response);
});
