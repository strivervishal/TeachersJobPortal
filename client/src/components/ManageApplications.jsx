import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Clipboard, Bookmark, Bell, Mail, Briefcase, Lock, LogOut, } from 'lucide-react';
import Banner from './Banner';
import Footer from './Footer';

const application = [
  {
    id: 1,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg',
    title: 'Service Engineer',
    company: 'Tesla construction',
    type: 'Full-Time',
    date: 'Mar 14th, 2025',
    status: 'Rejected',
  },
  {
    id: 2,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    title: 'Computer Science',
    company: 'Depan insider ltd.',
    type: 'Full-Time',
    date: 'Jan 04th, 2025',
    status: 'Processed',
  },
  {
    id: 3,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    title: 'Computer Science',
    company: 'Eduon education',
    type: 'Full-Time',
    date: 'Feb 19th, 2025',
    status: 'Processed',
  },
  {
    id: 4,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    title: 'Service Engineer',
    company: 'Autozon power ltd',
    type: 'Part-Time',
    date: 'Nov 14th, 2024',
    status: 'Approved',
  },
  {
    id: 5,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png',
    title: 'Support Executive',
    company: 'Saspol limited',
    type: 'Full-Time',
    date: 'Nov 14th, 2024',
    status: 'Rejected',
  },
  {
    id: 6,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg',
    title: 'Content Writing',
    company: 'Depan insider ltd.',
    type: 'Full-Time',
    date: 'Jan 14th, 2025',
    status: 'Processed',
  },
  {
    id: 7,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    title: 'Support Executive',
    company: 'Saspol limited',
    type: 'Full-Time',
    date: 'Feb 10th, 2025',
    status: 'Rejected',
  },
  {
    id: 8,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg',
    title: 'Content Writing',
    company: 'Depan insider ltd.',
    type: 'Full-Time',
    date: 'Nov 14th, 2023',
    status: 'Processed',
  },
  {
    id: 9,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg',
    title: 'Mechanical Engineer',
    company: 'Conzio construction',
    type: 'Full-Time',
    date: 'Nov 14th, 2023',
    status: 'Rejected',
  },
  {
    id: 10,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    title: 'Content Writing',
    company: 'Depan insider ltd.',
    type: 'Full-Time',
    date: 'Nov 14th, 2023',
    status: 'Processed',
  },
  {
    id: 11,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    title: 'Teacher - English',
    company: 'Eduon education',
    type: 'Full-Time',
    date: 'Nov 14th, 2023',
    status: 'Rejected',
  },
  {
    id: 12,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    title: 'Service Engineer',
    company: 'Autozon power ltd',
    type: 'Part-Time',
    date: 'Nov 14th, 2023',
    status: 'Approved',
  },
  {
    id: 13,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png',
    title: 'Support Executive',
    company: 'Saspol limited',
    type: 'Full-Time',
    date: 'Nov 14th, 2023',
    status: 'Rejected',
  },
  {
    id: 14,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg',
    title: 'Content Writing',
    company: 'Depan insider ltd.',
    type: 'Full-Time',
    date: 'Nov 14th, 2023',
    status: 'Processed',
  },
  {
    id: 15,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    title: 'Support Executive',
    company: 'Saspol limited',
    type: 'Full-Time',
    date: 'Nov 14th, 2023',
    status: 'Rejected',
  },
  {
    id: 16,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg',
    title: 'Content Writing',
    company: 'Depan insider ltd.',
    type: 'Full-Time',
    date: 'Nov 14th, 2023',
    status: 'Processed',
  },
];

const ITEMS_PER_PAGE = 6;

const ManageApplications = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [applications, setApplications] = useState([]);

  const totalPages = Math.ceil(application.length / ITEMS_PER_PAGE);

  const paginatedApps = application.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );


  useEffect(() => {
    fetch("http://localhost:5000/api/applications")
      .then((res) => res.json())
      .then((data) => setApplications(data))
      .catch((err) => console.error("Error fetching Applications:", err));
  }, []);

  const renderPageNumbers = () =>
    Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
      <button
        key={page}
        onClick={() => setCurrentPage(page)}
        className={`w-10 h-10 rounded-md border flex items-center justify-center text-sm font-medium transition ${
          currentPage === page
            ? 'bg-blue-600 text-white'
            : 'bg-white text-black hover:bg-gray-100'
        }`}
      >
        {page}
      </button>
    ));
    

  return (
    <>
      <Banner />
      <div className="flex  flex-wrap lg:flex-nowrap justify-center items-start min-h-screen bg-[#f5f9ff] p-5 lg:p-8 gap-5 font-['Segoe_UI',sans-serif]">
      {/* Sidebar */}
      <div className="w-[240px] bg-white rounded-lg p-[30px_20px] shadow-sm h-fit flex-shrink-0 lg:mr-0 w-full lg:w-[350px]">
        <h2 className="text-xl font-semibold mb-4">Manage Account</h2>
        <ul className="space-y-3 text-gray-700 text-sm">
          <li>
            <a
              href="/resume"
              className="flex items-center w-full mb-3 px-4 py-2 rounded-md text-sm gap-2 justify-start bg-white border border-gray-300 hover:bg-[#466bff] hover:text-white hover:border-[#466bff] hover:shadow-md transition-all duration-300 active:bg-[#466bff] active:text-white"
            >
              <Clipboard size={18} /> My Resume
            </a>
          </li>
          <li>
            <a
              href="/bookmarked"
              className="flex items-center w-full mb-3 px-4 py-2 rounded-md text-sm gap-2 justify-start bg-white border border-gray-300 hover:bg-[#466bff] hover:text-white hover:border-[#466bff] hover:shadow-md transition-all duration-300 active:bg-[#466bff] active:text-white"
            >
              <Bookmark size={18} /> Bookmarked Jobs
            </a>
          </li>
          <li>
            <a
              href="/notifications"
              className="flex items-center w-full mb-3 px-4 py-2 rounded-md text-sm gap-2 justify-start bg-white border border-gray-300 hover:bg-[#466bff] hover:text-white hover:border-[#466bff] hover:shadow-md transition-all duration-300 active:bg-[#466bff] active:text-white"
            >
              <div className="flex items-center gap-3">
                <Bell size={18} /> Notifications
              </div>
              <span className="bg-blue-100 text-blue-600 text-sm px-2 py-0.5 rounded-full font-semibold">
                5
              </span>
            </a>
          </li>
          <li>
            <a
              href="/manage-applications"
              className="flex items-center gap-3 px-4 py-3 rounded-md bg-blue-600 text-white"
            >
              <Mail size={18} /> Manage Applications
            </a>
          </li>
          <li>
            <a
              href="/manage-jobs"
              className="flex items-center w-full mb-3 px-4 py-2 rounded-md text-sm gap-2 justify-start bg-white border border-gray-300 hover:bg-[#466bff] hover:text-white hover:border-[#466bff] hover:shadow-md transition-all duration-300 active:bg-[#466bff] active:text-white"
            >
              <Briefcase size={18} /> Manage Jobs
            </a>
          </li>
          <li>
            <a
              href="/change-password"
              className="flex items-center w-full mb-3 px-4 py-2 rounded-md text-sm gap-2 justify-start bg-white border border-gray-300 hover:bg-[#466bff] hover:text-white hover:border-[#466bff] hover:shadow-md transition-all duration-300 active:bg-[#466bff] active:text-white"
            >
              <Lock size={18} /> Change Password
            </a>
          </li>
          <li>
            <a
              href="/signout"
              className="flex items-center w-full mb-3 px-4 py-2 rounded-md text-sm gap-2 justify-start bg-white border border-gray-300 hover:bg-[#466bff] hover:text-white hover:border-[#466bff] hover:shadow-md transition-all duration-300 active:bg-[#466bff] active:text-white"
            >
              <LogOut size={18} /> Sign Out
            </a>
          </li>
        </ul>
      </div>

      {/* Applications List */}
      <div className="flex-1 basis-[300px] max-w-[670px] w-full bg-white rounded-lg p-[15px] shadow-sm px-8">
        {paginatedApps.map((app) => (
          <div
            key={app.id + app.company}
            className="flex justify-between items-center border-b border-gray-300 py-4 "
          >
            <div className="flex items-center gap-4">
              <img src={app.logo} alt="logo" className="w-13 h-13 object-contain" />
              <div>
                <h3 className="pl-4 font-semibold text-sm">{app.title}</h3>
                <p className="pl-4 text-sm text-gray-500">{app.company}</p>
              </div>
            </div>
            <div className="flex items-center gap-8 text-sm">
              <span className="bg-indigo-100 text-indigo-600 font-medium px-2 py-1 rounded-md">
                {app.type}
              </span>
              <span className="text-sm text-gray-500">{app.date}</span>
              <span className="text-sm text-gray-500">{app.status}</span>
            </div>
          </div>
        ))}

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-2 my-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="w-10 h-10 rounded-md border flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronLeft size={16} />
          </button>

          {renderPageNumbers()}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="w-10 h-10 rounded-md border flex items-center justify-center hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default ManageApplications;
