import transporter from "../config/emailconfig.js";

export const sendContactFormEmail = async (name, email, message) => {
  const mailOptions = {
    from: email,
    to: 'solutiontechnovo@gmail.com',
    subject: `Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  return transporter.sendMail(mailOptions);
};
