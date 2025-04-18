import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import AddJob from './components/AddJob';  // ✅ Corrected casing
import ManageJobs from './components/ManageJobs';

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

        {/* Add Job route */}
        <Route path="/add-job" element={<AddJob />} />  {/* ✅ Fixed */}

        {/* Catch-all Route for undefined paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;
