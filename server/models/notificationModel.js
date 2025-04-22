const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  logo: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
