import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Manage.css';

const Manage = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);

  // Fetch jobs with pagination
  const fetchJobs = async (page = 1) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/jobs?page=${page}&limit=5`);
      setJobs(res.data.jobs);
      setCurrentPage(res.data.currentPage);
      setTotalPages(res.data.totalPages);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setError('Failed to fetch jobs. Please try again later.');
    }
  };

  // Toggle featured
  const toggleFeatured = async (id) => {
    try {
      const res = await axios.patch(`http://localhost:5000/api/jobs/${id}/toggle-featured`);
      const updatedJob = res.data;
      setJobs((prevJobs) =>
        prevJobs.map((job) => (job._id === updatedJob._id ? updatedJob : job))
      );
    } catch (error) {
      console.error('Error toggling featured:', error);
      setError('Failed to toggle featured status. Please try again.');
    }
  };

  useEffect(() => {
    fetchJobs(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      fetchJobs(page);
    }
  };

  return (
    <div className="manage-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Manage Account</h2>
        <button>My Resume</button>
        <button>Bookmarked Jobs</button>
        <button>Notifications <span className="badge">5</span></button>
        <button>Manage Applications</button>
        <button className="active">Manage Jobs</button>
        <button>Change Password</button>
        <button>Sign Out</button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="table-container">
          {error && <div className="error-message">{error}</div>}
          <table className="jobs-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Contract Type</th>
                <th>Candidates</th>
                <th>Featured</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job._id}>
                  <td>{job.title}</td>
                  <td><span className="badge">{job.type}</span></td>
                  <td><img src={job.image || '/user.jpg'} alt="candidate" /></td>
                  <td>
                    <span
                      className={`star-icon ${job.featured ? 'active' : ''}`}
                      onClick={() => toggleFeatured(job._id)}
                    >
                      {job.featured ? '★' : '☆'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            &lt;
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              className={currentPage === index + 1 ? 'active' : ''}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Manage;
