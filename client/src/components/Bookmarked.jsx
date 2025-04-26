import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from './Banner';
import Footer from './Footer';
import Sidebar from './Sidebar';

const bookmarkedJobs = [
  {
    id: 1,
    title: 'Mechanical Engineer',
    company: 'Conzio construction',
    type: 'Full-Time',
    location: 'New York,US',
    logo: 'https://i.imgur.com/t7rmr8o.png',
  },
  {
    id: 2,
    title: 'Content Writing',
    company: 'Depan insider ltd.',
    type: 'Internship',
    location: 'Alaska',
    logo: 'https://i.imgur.com/bvaB0ch.png',
  },
  {
    id: 3,
    title: 'Teacher - English',
    company: 'Eduon education',
    type: 'Internship',
    location: 'Florida',
    logo: 'https://i.imgur.com/6KVHUXQ.png',
  },
  {
    id: 4,
    title: 'Service Engineer',
    company: 'Autozon power ltd',
    type: 'Part-Time',
    location: 'California',
    logo: 'https://i.imgur.com/ub43zxF.png',
  },
  {
    id: 5,
    title: 'Support Executive',
    company: 'Saspol limited',
    type: 'Full-Time',
    location: 'New York, US',
    logo: 'https://i.imgur.com/X7qd2GL.png',
  },
  {
    id: 6,
    title: 'Research Assistant',
    company: 'Medq medical',
    type: 'Full-Time',
    location: 'New York, US',
    logo: 'https://i.imgur.com/dNO1f2C.png',
  },
];

const Bookmarked = () => {
  const navigate = useNavigate();

  return (
    <>
      <Banner />
      <div className="flex flex-wrap gap-7 lg:flex-nowrap justify-center items-start min-h-screen bg-[#f5f9ff] p-10 lg:p-8">
        <Sidebar />
        <div className="flex-1 basis-[700px] max-w-[700px] w-full bg-white rounded-lg shadow-sm px-6 pb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-6"></h2>

          {bookmarkedJobs.map((job) => (
  <div
    key={job.id}
    className="flex justify-between items-center border-b border-gray-100 py-6"
  >
    {/* Left side: Logo + Job Info */}
    <div className="flex items-center gap-4">
      <img
        src={job.logo}
        alt="logo"
        className="w-10 h-10 object-cover rounded-md"
      />
      <div>
        <div className="font-semibold text-gray-900">{job.title}</div>
        <div className="text-sm text-gray-500">{job.company}</div>
      </div>
    </div>

   {/* Right side: Type + Location + Button */}
<div className="flex flex-col sm:flex-row sm:items-center gap-8 sm:gap-10 text-center sm:text-right">
  <span
    className={`text-sm px-4 py-1 rounded-md font-medium w-fit mx-auto transform ${
      job.type === 'Full-Time'
        ? 'bg-indigo-100 text-indigo-700 translate-x-8' // No shift
        : job.type === 'Part-Time'
        ? 'bg-purple-100 text-purple-700 translate-x-4' // Shift to right by 4%
        : job.type === 'Freelance'
        ? 'bg-green-100 text-green-700 translate-x-4' // Shift to right by 8%
        : job.type === 'Internship'
        ? 'bg-yellow-100 text-yellow-2000 translate-x-0' // Shift to right by 4%
        : 'bg-gray-100 text-gray-2000 translate-x-0' // Shift to right by 6%
    }`}
  >
    {job.type}
  </span>


      <span className="text-sm text-gray-500">{job.location}</span>
      <button
  onClick={() => navigate(`/job-details/${job.id}`, { state: { job } })}
  className="px-3 py-1 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
>
  Apply Now
</button>

    </div>
  </div>
))}


          {/* Pagination */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  className={`w-8 h-8 flex items-center justify-center rounded-md border text-sm font-medium ${
                    num === 1
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bookmarked;
