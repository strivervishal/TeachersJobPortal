/* server.js */
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require("./routes/contactRoutes");
const resumeRoutes = require('./routes/resumeRoutes')


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
app.use('/api/auth', require('./routes/auth'));
app.use("/api/contact", contactRoutes);
app.use("/api/applications", require('./routes/applications'));
app.use('/api/jobs', require('./routes/jobRoutes'));  // Add this line to include job routes
app.use('/api/resumes', resumeRoutes) // for Browse Resumes
app.use('/api/manage-resumes', require('./routes/resumesRoutes')); 

// Test protected route
const authMiddleware = require('./middleware/authMiddleware');
app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({ message: `Hello user ${req.user}` });
});

// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to the job management API!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
