import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ManageJobs from './components/ManageJobs';  // Assuming ManageJobs is in the components folder
import ManageResumes from './components/ManageResumes'; 



const App = () => {
  return (
    <>
      {/* Navbar will be displayed on every page */}
      <Navbar />
      
      {/* Main Routes for the Application */}
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />
        
        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Manage Jobs route */}
        <Route path="/manage-jobs" element={<ManageJobs />} />

        <Route path="/manage-resumes" element={<ManageResumes />} />
        
        {/* Catch-all Route for undefined paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;
