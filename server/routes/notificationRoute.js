const express = require("express");
const router = express.Router();
const Notification = require("../models/notificationModel");

// GET all notifications
router.get("/", async (req, res) => {
    try {
      const notifications = await Notification.find().sort({ createdAt: -1 });
      res.status(200).json(notifications);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch notifications." });
    }
  });

// POST a new notification (optional, for adding entries)
router.post("/", async (req, res) => {
  const { logo, company, title, date } = req.body;

  try {
    const newNotification = await Notification.create({
      logo,
      company,
      title,
      date,
    });

    res.status(201).json(newNotification);
  } catch (err) {
    res.status(400).json({ error: "Failed to create notification." });
  }
});

module.exports = router;
