import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Banner from './Banner';
import Footer from './Footer';
import Sidebar from './Sidebar'; // imported Sidebar component
import './Manage.css';

const Manage = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);

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
    <>
      <Banner />
      <div className="flex flex-wrap gap-5 lg:flex-nowrap justify-center items-start min-h-screen bg-[#f5f9ff] p-5 lg:p-8">
        <Sidebar />
        <div className="flex-1 basis-[300px] max-w-[670px] w-full bg-white rounded-lg shadow-sm px-6 pb-10">
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-500 text-sm">
                <th className="py-6 px-2 font-semibold">Job Title</th>
                <th className="py-6 px-2 font-semibold">Contract</th>
                <th className="py-6 px-2 font-semibold">Candidates</th>
                <th className="py-6 px-2 font-semibold">Featured</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job._id} className="border-t text-sm text-gray-700">
                  <td className="py-6 px-2 font-semibold text-gray-900 whitespace-nowrap">{job.title}</td>
                  <td className="py-6 px-2">
                    <span className={`text-sm px-3 py-1 rounded-md font-medium ${
                      job.type === 'Full-Time'
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      {job.type}
                    </span>
                  </td>
                  <td className="py-6 px-2">
                    <img
                      src={job.image || '/user.jpg'}
                      alt="candidate"
                      className="w-8 h-8 rounded-full"
                    />
                  </td>
                  <td className="py-6 px-2">
                    <span
                      className={`cursor-pointer text-xl ${
                        job.featured ? 'text-yellow-500' : 'text-gray-400'
                      }`}
                      onClick={() => toggleFeatured(job._id)}
                    >
                      {job.featured ? '★' : '☆'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="px-3 py-1 border rounded-md bg-white text-gray-700 hover:bg-blue-50"
                disabled={currentPage === 1}
              >
                &larr;
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-3 py-1 border rounded-md ${
                    currentPage === index + 1
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-800 hover:bg-blue-50'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="px-3 py-1 border rounded-md bg-white text-gray-700 hover:bg-blue-50"
                disabled={currentPage === totalPages}
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Manage;
