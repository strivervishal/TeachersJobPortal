import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { useAuth } from './context/AuthContext';
import ContactPage from './components/ContactPage';
import ManageJobs from './components/ManageJobs';  
import ManageApplications from './components/manageApplications';
import AddJob from './components/AddJob';  
import ManageResumes from './components/ManageResumes';
import BrowseResume from './components/BrowseResumes';
import MyResume from './components/MyResume';  


const App = () => {

  const { isAuthenticated } = useAuth();

  return (
    <>
      {/* Navbar will be displayed on every page */}
      <Navbar />
      
      {/* Main Routes for the Application */}
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />

        {/* Auth routes (only for unauthenticated users) */}
        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/" replace /> : <Login />
          }
        />
        <Route
          path="/signup"
          element={
            isAuthenticated ? <Navigate to="/" replace /> : <Signup />
          }
        />

        <Route path="/contact" element={<ContactPage />} />


        {/* Catch-all route: Redirect everything else to Home */}
        
        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Manage Jobs route */}
        <Route path="/manage-jobs" element={<ManageJobs />} />
        
        {/* Add Job route */}
        <Route path="/add-job" element={<AddJob />} />  {/* ✅ Fixed */}
        
        {/* Manage Applications Route */}
        <Route path='/manage-applications' element={<ManageApplications />} />

        <Route path='/manage-resumes' element={<ManageResumes />} />

        <Route path='browse-resumes' element={<BrowseResume />} />

        <Route path="/my-resume" element={<MyResume />} />
        {/* Catch-all Route for undefined paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;
