import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail", // Use your desired email provider
  auth: {
    user: 'chimaemekaiheonu@gmail.com',
    pass: 'gzhbjelhuvmjfbrc',
  },
});

export default transporter;
