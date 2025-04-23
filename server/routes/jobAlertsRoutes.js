// routes/jobAlerts.js
const express = require('express');
const router = express.Router();
const JobAlert = require('../models/JobAlert');

// GET /api/jobalerts?page=1&limit=5
router.get('/', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 6;

  try {
    const total = await JobAlert.countDocuments();
    const alerts = await JobAlert.find()
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      data: alerts,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching job alerts', error });
  }
});

module.exports = router;
