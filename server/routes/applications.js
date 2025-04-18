const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

// GET /api/applications?page=1&limit=4
router.get('/', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 4;

  try {
    const total = await Application.countDocuments();
    const applications = await Application.find()
      .sort({ createdAt: -1 }) // latest first
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      data: applications
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Optional: POST to add new applications
router.post('/', async (req, res) => {
  try {
    const application = new Application(req.body);
    await application.save();
    res.status(201).json(application);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
