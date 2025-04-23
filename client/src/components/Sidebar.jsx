import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaBookmark, FaBell, FaBriefcase, FaClipboard, FaKey, FaSignOutAlt } from 'react-icons/fa'; // Importing icons

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-90 bg-white p-6 rounded-lg shadow-sm space-y-6 max-h-[100vh]">
      <h2 className="text-xl font-semibold text-gray-800">Manage Account</h2>
      
      {/* Link to My Resume page */}
      <Link to="/my-resume">
        <button className={`w-full py-2 px-6 text-left text-sm border rounded-md 
          ${isActive('/my-resume') ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-gray-300 hover:bg-blue-500 hover:text-white'} mt-2`}>
          <FaUser className="inline-block mr-2" /> My Resume
        </button>
      </Link>

      {/* Link to Bookmarked Jobs page */}
      <Link to="/bookmarked-jobs">
        <button className={`w-full py-2 px-6 text-left text-sm border rounded-md 
          ${isActive('/bookmarked-jobs') ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-gray-300 hover:bg-blue-500 hover:text-white'} mt-2`}>
          <FaBookmark className="inline-block mr-2" /> Bookmarked Jobs
        </button>
      </Link>

      {/* Link to Notifications page */}
      <Link to="/notifications">
        <button className={`w-full py-2 px-6 text-left text-sm border rounded-md 
          ${isActive('/notifications') ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-gray-300 hover:bg-blue-500 hover:text-white'} mt-2`}>
          <FaBell className="inline-block mr-2" /> Notifications <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">5</span>
        </button>
      </Link>

      {/* Link to Manage Resumes page */}
      <Link to="/manage-resumes">
        <button className={`w-full py-2 px-6 text-left text-sm border rounded-md 
          ${isActive('/manage-resumes') ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-gray-300 hover:bg-blue-500 hover:text-white'} mt-2`}>
          <FaClipboard className="inline-block mr-2" /> Manage Resumes
        </button>
      </Link>

      {/* Link to Manage Applications page */}
      <Link to="/manage-applications">
        <button className={`w-full py-2 px-6 text-left text-sm border rounded-md 
          ${isActive('/manage-applications') ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-gray-300 hover:bg-blue-500 hover:text-white'} mt-2`}>
          <FaBriefcase className="inline-block mr-2" /> Manage Applications
        </button>
      </Link>

      {/* Link to Manage Jobs page */}
      <Link to="/manage-jobs">
        <button className={`w-full py-2 px-6 text-left text-sm border rounded-md 
          ${isActive('/manage-jobs') ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-gray-300 hover:bg-blue-500 hover:text-white'} mt-2`}>
          <FaBriefcase className="inline-block mr-2" /> Manage Jobs
        </button>
      </Link>

      {/* Link to Job Alerts page */}
      <Link to="/job-alerts">
        <button className={`w-full py-2 px-6 text-left text-sm border rounded-md 
          ${isActive('/job-alerts') ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-gray-300 hover:bg-blue-500 hover:text-white'} mt-2`}>
          <FaBriefcase className="inline-block mr-2" /> Job Alerts
        </button>
      </Link>

      {/* Link to Change Password page */}
      <Link to="/change-password">
        <button className={`w-full py-2 px-6 text-left text-sm border rounded-md 
          ${isActive('/change-password') ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-gray-300 hover:bg-blue-500 hover:text-white'} mt-2`}>
          <FaKey className="inline-block mr-2" /> Change Password
        </button>
      </Link>

      {/* Link to Sign Out page */}
      <Link to="/sign-out">
        <button className={`w-full py-2 px-6 text-left text-sm border rounded-md 
          ${isActive('/sign-out') ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-gray-300 hover:bg-blue-500 hover:text-white'} mt-2`}>
          <FaSignOutAlt className="inline-block mr-2" /> Sign Out
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
