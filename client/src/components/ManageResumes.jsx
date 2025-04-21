import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Manage.css";
import Banner from "./Banner";
import Footer from "./Footer";

const ITEMS_PER_PAGE = 4;

const ManageResumes = () => {
  const [applications, setApplications] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editingApp, setEditingApp] = useState(null);
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = () => {
    axios
      .get("http://localhost:5000/api/manage-resumes")
      .then((response) => setApplications(response.data))
      .catch((error) => console.error("Error fetching applications:", error));
  };

  const handleEditClick = (app) => {
    setEditingApp(app);
    setNote(app.note || "");
    setStatus(app.status || "New");
  };

  const handleSave = async () => {
    try {
      const { data: updatedApp } = await axios.put(`http://localhost:5000/api/manage-resumes/${editingApp._id}`, {
        note,
        status,
      });
  
      const updatedApps = applications.map((app) =>
        app._id === editingApp._id ? updatedApp : app
      );
  
      setApplications(updatedApps);
      setEditingApp(null);
    } catch (error) {
      console.error("Error updating application:", error);
    }
  };
  

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/manage-resumes/${id}`);  

      setApplications((prevApps) => prevApps.filter((app) => app._id !== id));
    } catch (error) {
      console.error("Error deleting application:", error);
    }
  };

  const totalPages = Math.ceil(applications.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleApplications = applications.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <>
      <Banner />
      <div className="manage-container">
        {/* Sidebar */}
        <div className="sidebar">
          <h2>Manage Account</h2>
          <button>My Resume</button>
          <button>Bookmarked Jobs</button>
          <button>
            Notifications <span className="badge">5</span>
          </button>
          <button className="active">Manage Applications</button>
          <button>Manage Jobs</button>
          <button>Change Password</button>
          <button>Sign Out</button>
        </div>

        {/* Main Content */}
        <div className="main-content p-6">
          <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-200">
            {visibleApplications.map((app) => (
              <div
                key={app._id}
                className="flex items-start gap-4 p-4 hover:bg-gray-50 transition"
              >
                <img
                  src={app.image_url}
                  alt={app.teacher_name}
                  className="w-28 h-36 object-cover rounded-md ml-4"
                />
                <div className="flex-grow">
                  <h3 className="text-base font-semibold">{app.teacher_name}</h3>
                  <p className="text-sm text-gray-600">{app.job_title}</p>
                  <div className="text-sm text-gray-500 mt-1 space-y-1">
                    <p>
                      <strong>Experience:</strong> 3–5 years
                    </p>
                    <p>
                      <strong>Hourly Rate:</strong> $30
                    </p>
                    <p>
                      <strong>Location:</strong> 📍 Cupertino, CA, USA
                    </p>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["Php", "jQuery", "WordPress", "CSS3", "HTML5"].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    Updated on: {new Date(app.applied_on).toDateString()}
                  </p>
                  <p className="text-xs mt-1 text-gray-500">
                    <strong>Status:</strong> {app.status || "New"}
                  </p>
                  {app.note && (
                    <p className="text-xs mt-1 text-gray-500">
                      <strong>Note:</strong> {app.note}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2 mt-2 sm:mt-0">
                  <button className="bg-white hover:bg-gray-200 px-3 py-1 text-xs rounded border border-gray-300">
                    Hide
                  </button>
                  <button
                    onClick={() => handleEditClick(app)}
                    className="bg-white hover:bg-gray-200 px-3 py-1 text-xs rounded border border-gray-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(app._id)}
                    className="bg-white hover:bg-gray-200 px-3 py-1 text-xs rounded border border-gray-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10 space-x-1">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-3 py-1 border rounded w-8 h-8 flex items-center justify-center ${
                currentPage === 1
                  ? "bg-white text-gray-300 border-gray-300 cursor-not-allowed"
                  : "hover:bg-gray-100 border-gray-300 text-gray-600"
              }`}
            >
              ←
            </button>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-1 border rounded w-8 h-8 flex items-center justify-center font-medium ${
                  currentPage === index + 1
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 border rounded w-8 h-8 flex items-center justify-center ${
                currentPage === totalPages
                  ? "bg-white text-gray-300 border-gray-300 cursor-not-allowed"
                  : "hover:bg-gray-100 border-gray-300 text-gray-600"
              }`}
            >
              →
            </button>
          </div>

          {/* Edit Modal */}
          {editingApp && (
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg w-96 space-y-4 shadow-lg">
                <h3 className="text-xl font-semibold">Edit Application</h3>
                <div className="flex flex-wrap items-start gap-4">
                  <div className="w-40">
                    <label className="block text-sm font-medium mb-1">Status</label>
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="w-full border px-3 py-2 rounded text-sm"
                    >
                      <option value="New">New</option>
                      <option value="Shortlisted">Shortlisted</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </div>
                  <div className="flex-grow">
                    <label className="block text-sm font-medium mb-1">Note</label>
                    <input
                      type="text"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      className="w-full border px-3 py-2 rounded text-sm"
                      placeholder="Add note (optional)"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setEditingApp(null)}
                    className="px-4 py-2 text-sm rounded border"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ManageResumes;
