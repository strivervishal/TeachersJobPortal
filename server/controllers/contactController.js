const Contact = require("../models/Contact");

exports.submitContactForm = async (req, res) => {
  try {
    const { name, subject, email, phone, message } = req.body;

    if (!name || !subject || !email || !phone || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newContact = new Contact({ name, subject, email, phone, message });
    await newContact.save();

    res.status(201).json({ message: "Message submitted successfully." });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
