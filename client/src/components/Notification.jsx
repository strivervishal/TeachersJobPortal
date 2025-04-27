import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clipboard,
  Bookmark,
  Bell,
  Mail,
  Briefcase,
  Lock,
  LogOut,
  Clock,
} from "lucide-react";
import Banner from "./Banner";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const list = [
    {
      id: 1,
      logo: 'https://demo.graygrids.com/themes/jobgrids/assets/images/jobs/manage-job1.png',
      company: 'Conzio Construction',
      title: 'Web designer needed',
      date: '1 Hours ago',
    },
    {
      id: 2,
      logo: 'https://demo.graygrids.com/themes/jobgrids/assets/images/jobs/manage-job2.png',
      company: 'Seqty',
      title: 'Web designer needed',
      date: '2 Hours ago',
    },
    {
      id: 3,
      logo: 'https://demo.graygrids.com/themes/jobgrids/assets/images/jobs/manage-job3.png',
      company: 'Eduon',
      title: 'Web designer needed',
      date: '3 Hours ago',
    },
    {
      id: 4,
      logo: 'https://demo.graygrids.com/themes/jobgrids/assets/images/jobs/manage-job4.png',
      company: 'Autozon',
      title: 'Web designer needed',
      date: '4 Hours ago',
    },
    {
      id: 5,
      logo: 'https://demo.graygrids.com/themes/jobgrids/assets/images/jobs/manage-job5.png',
      company: 'SasPol',
      title: 'Web designer needed',
      date: '5 Hours ago',
    },
  ];

const Notification = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [notifications, setNotifications] = useState()
  const itemsPerPage = 5;
  const totalPages = Math.ceil(list.length / itemsPerPage);

  const paginatedNotifications = list.slice(   // replace list to notifications while fetching data from backend
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    fetch("http://localhost:5000/api/")
      .then((res) => res.json())
      .then((data) => setNotifications(data))
      .catch((err) => console.error("Failed to fetch notifications", err));
  }, []);
  

  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
      <button
        key={page}
        onClick={() => setCurrentPage(page)}
        className={`w-10 h-10 rounded-md border flex items-center justify-center ${
          page === currentPage ? "bg-blue-600 text-white" : "hover:bg-gray-100"
        }`}
      >
        {page}
      </button>
    ));
  };

  return (
    <>
      <Banner />
      <div className="flex  flex-wrap lg:flex-nowrap justify-center items-start min-h-screen bg-[#f5f9ff] p-5 lg:p-8 gap-5 font-['Segoe_UI',sans-serif]">
        {/* Sidebar */}
        <Sidebar/>
        {/* <div className="w-[240px] bg-white rounded-lg p-[30px_20px] shadow-sm h-fit flex-shrink-0 lg:mr-0 w-full lg:w-[350px]">
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
                className="flex items-center gap-3 px-4 py-3 rounded-md bg-blue-600 text-white"
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
                className="flex items-center w-full mb-3 px-4 py-2 rounded-md text-sm gap-2 justify-start bg-white border border-gray-300 hover:bg-[#466bff] hover:text-white hover:border-[#466bff] hover:shadow-md transition-all duration-300 active:bg-[#466bff] active:text-white"
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
        </div> */}

        <div className="flex-1 basis-[300px] max-w-[670px] w-full bg-white rounded-lg p-[15px] shadow-sm px-8">
          {paginatedNotifications.map((app) => (
            <div
              key={app.id + app.company}
              className="flex justify-between items-center border-b border-gray-300 py-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={app.logo}
                  alt="logo"
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="pl-4 text-sm text-gray-800">
                    Your Bookmarked job <strong>"{app.title}"</strong> from{" "}
                    {app.company}, has expired.
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-600 font-medium">
                <Clock size={16} />
                <span>{app.date}</span>
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
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
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

export default Notification;
