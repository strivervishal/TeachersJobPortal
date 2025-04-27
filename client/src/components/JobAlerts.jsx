// JobAlerts.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Banner from './Banner';
import Footer from './Footer';
import Sidebar from './Sidebar';


const jobData = [
    { name: 'Web Designer', keyword: 'Web Designer', contract: 'Full-Time', frequency: 'Daily' },
    { name: 'UI/UX designer', keyword: 'UI/UX designer', contract: 'Full-Time', frequency: 'Daily' },
    { name: 'Developer', keyword: 'Developer', contract: 'Part-Time', frequency: 'Daily' },
    { name: 'Senior UX Designer', keyword: 'Senior UX Designer', contract: 'Full-Time', frequency: 'Daily' },
    { name: 'Graphics Design', keyword: 'Graphics Design', contract: 'Part-Time', frequency: 'Daily' },
    { name: 'Sales Manager', keyword: 'Sales Manager', contract: 'Full-Time', frequency: 'Daily' },
    { name: 'QA Engineer', keyword: 'QA Engineer', contract: 'Part-Time', frequency: 'Daily' },
    { name: 'Content Writer', keyword: 'Content Writer', contract: 'Full-Time', frequency: 'Daily' },
  ];
  
  const ITEMS_PER_PAGE = 6;
  
  const JobAlerts = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [alerts, setAlerts] = useState();
    const [totalpages, setTotalPages] = useState();
  
    const totalPages = Math.ceil(jobData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentJobs = jobData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  
    const fetchJobAlerts = async (page = 1) => {
      try {
        const res = await axios.get(`http://localhost:5000/api/jobalerts?page=${page}&limit=${ITEMS_PER_PAGE}`);
        setAlerts(res.data.data);
        setTotalPages(res.data.totalPages);
        setCurrentPage(res.data.currentPage);
      } catch (error) {
        console.error('Failed to fetch job alerts', error);
      }
    };

    useEffect(() => {
      fetchJobAlerts(currentPage);
    }, [currentPage]);

    const goToPage = (page) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    };

  return (
    <>
        <Banner />
        <div className='flex  flex-wrap gap-5 lg:flex-nowrap justify-center items-start min-h-screen bg-[#f5f9ff] p-5 lg:p-8'>
          <Sidebar/>
          <div className="flex-1 basis-[300px] max-w-[670px] w-full bg-white rounded-lg shadow-sm px-6 pb-10">
        <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-gray-500 text-sm">
            <th className="py-6 px-2 font-semibold">Name</th>
            <th className="py-6 px-2 font-semibold">Keywords</th>
            <th className="py-6 px-2 font-semibold">Contract Type</th>
            <th className="py-6 px-2 font-semibold">Frequency</th>
          </tr>
        </thead>
        <tbody>
          {currentJobs.map((job, index) => (
            <tr key={index} className="border-t text-sm text-gray-300">
              <td className="py-6 px-2 font-semibold text-gray-900 whitespace-nowrap">{job.name}</td>
              <td className="py-6 px-2 text-gray-500 whitespace-nowrap">{job.keyword}</td>
              <td className="py-6 px-2">
                <span
                  className={`text-sm px-3 py-1 rounded-md font-medium ${
                    job.contract === 'Full-Time'
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'bg-purple-100 text-purple-700'
                  }`}
                >
                  {job.contract}
                </span>
              </td>
              <td className="py-4 px-4 text-gray-600 whitespace-nowrap">{job.frequency}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <div className="flex items-center gap-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            className="px-3 py-1 border rounded-md bg-white text-gray-700 hover:bg-blue-50"
            disabled={currentPage === 1}
          >
            &larr;
          </button>
          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx}
              onClick={() => goToPage(idx + 1)}
              className={`px-3 py-1 border rounded-md ${
                currentPage === idx + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-800 hover:bg-blue-50'
              }`}
            >
              {idx + 1}
            </button>
          ))}
          <button
            onClick={() => goToPage(currentPage + 1)}
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

export default JobAlerts;
