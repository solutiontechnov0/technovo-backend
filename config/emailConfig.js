import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail", 
  auth: {
    user: 'chimaemekaiheonu@gmail.com',
    pass: 'gzhbjelhuvmjfbrc',
  },
});

export default transporter;
