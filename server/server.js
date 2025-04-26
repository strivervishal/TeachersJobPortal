/* server.js */
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const contactRoutes = require('./routes/contactRoutes');
const resumeRoutes = require('./routes/resumeRoutes');
const jobAlertsRoutes = require('./routes/jobAlertsRoutes');
const jobRoutes = require('./routes/jobRoutes');
const authRoutes = require('./routes/auth');
const applicationRoutes = require('./routes/applications');
const manageResumeRoutes = require('./routes/resumesRoutes');
//const userJobRoutes = require('./routes/userJobRoutes'); 

const authMiddleware = require('./middleware/authMiddleware');

const app = express();

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/jobs', jobRoutes); // Job management
app.use('/api/resumes', resumeRoutes); // Resume browsing
app.use('/api/jobalerts', jobAlertsRoutes);
app.use('/api/manage-resumes', manageResumeRoutes); // Resume upload/edit
app.use('/uploads', express.static('uploads')); // Serve uploaded files
//app.use('/api/user-jobs', userJobRoutes);

// Test protected route
app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({ message: `Hello user ${req.user}` });
});

// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to the job management API!');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
