import { sendContactFormEmail } from "../services/emailService.js";

export const handleContactFormSubmission = async (req, res) => {
    const { name, email, message } = req.body;
  
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields are required!" });
    }
  
    try {
      await sendContactFormEmail(name, email, message);
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: "Failed to send message." });
    }
  };
  