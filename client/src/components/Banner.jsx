import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const routeTextMap = {

  "/about": {
    title: "About Us",
    text: "Business plan draws on a wide range of knowledge from different business disciplines. Business draws on a wide range of different business.",
    breadcrumbs: [
      { text: 'Home', link: '/' },
      { text: 'About Us', link: '/about' }
    ],
  },
  "/post-job": {
    title: "Post a Job",
    text: "Business plan draws on a wide range of knowledge from different business disciplines. Business draws on a wide range of different business.",
    breadcrumbs: [
      { text: 'Home', link: '/' },
      { text: 'Blogs', link: '/blogs' },
      { text: 'Post a Job', link: '/post-job' }
    ],
  },
  "/manage-jobs": {
    title: "Manage Jobs",
    text: "Business plan draws on a wide range of knowledge from different business disciplines. Business draws on a wide range of different business.",
    breadcrumbs: [
      { text: 'Home', link: '/' },
      { text: 'Manage Jobs', link: '/manage-job' }
    ],
  },
  "/add-job": {
    title: "Add Job",
    text: "Business plan draws on a wide range of knowledge from different business disciplines. Business draws on a wide range of different business.",
    breadcrumbs: [
      { text: 'Home', link: '/' },
      { text: 'Add Job', link: '/add-job' }
    ],
  },
  "/manage-applications": {
    title: "Manage Applications",
    text: "Business plan draws on a wide range of knowledge from different business disciplines. Business draws on a wide range of different business.",
    breadcrumbs: [
      { text: 'Home', link: '/' },
      { text: 'Manage Applications', link: '/manage-applications' }
    ],
  },
  "/manage-resumes": {
    title: "Manage Resumes",
    text: "Business plan draws on a wide range of knowledge from different business disciplines. Business draws on a wide range of different business.",
    breadcrumbs: [
      { text: 'Home', link: '/' },
      { text: 'Manage Resumes', link: '/manage-resumes' }
    ],
  },
  "/browse-resumes": {
    title: "Browse Resumes",
    text: "Business plan draws on a wide range of knowledge from different business disciplines. Business draws on a wide range of different business.",
    breadcrumbs: [
      { text: 'Home', link: '/' },
      { text: 'Browse Resumes', link: '/browse-resumes' }
    ],
  },
  "/my-resume": {
    title: "My Resume",
    text: "Business plan draws on a wide range of knowledge from different business disciplines. Business draws on a wide range of different business.",
    breadcrumbs: [
      { text: 'Home', link: '/' },
      { text: 'My Resume', link: '/my-resume' }
    ],
  },
  
  "/bookmarked-jobs": {
  title: "Bookmarked Job",
  text: "Business plan draws on a wide range of knowledge from different business disciplines. Business draws on a wide range of different business.",
  breadcrumbs: [
    { text: 'Home', link: '/' },
    { text: 'Bookmarked Job', link: '/bookmarked-jobs' }
  ],
},
"/job-details/:id": {
    title: "Job Details",
    text: "Business plan draws on a wide range of knowledge from different business disciplines. Business draws on a wide range of different business.",
    breadcrumbs: [
      { text: 'Home', link: '/' },
      { text: 'Job Details', link: '/job-details/:id' }
    ],
  },

  "/contact": {
    title: "Contact Us",
    text: "Business plan draws on a wide range of knowledge from different business disciplines. Business draws on a wide range of different business.",
    breadcrumbs: [
      { text: 'Home', link: '/' },
      { text: 'Contact Us', link: '/contact' }
    ],
  },
  "/notifications": {
    title: "Notifications",
    text: "Business plan draws on a wide range of knowledge from different business disciplines. Business draws on a wide range of different business.",
    breadcrumbs: [
      { text: 'Home', link: '/' },
      { text: 'Notifications', link: '/notifications' }
    ],
  },
  "/bookmarked" : {
    title: "Bookmarked Jobs",
    text: "Business plan draws on a wide range of knowledge from different business disciplines. Business draws on a wide range of different business.",
    breadcrumbs: [
      { text: 'Home', link: '/' },
      { text: 'Bookmarked Jobs', link: '/bookmarked' }
    ],
  },
  "/resume" : {
    title: "Resume",
    text: "Business plan draws on a wide range of knowledge from different business disciplines. Business draws on a wide range of different business.",
    breadcrumbs: [
      { text: 'Home', link: '/' },
      { text: 'Resume', link: '/resume' }
    ],
  },
  "/job-alerts" : {
    title : "Job Alerts",
    text : "Business plan draws on a wide range of knowledge from different business disciplines. Business draws on a wide range of different business.",
    breadcrumbs: [
      { text: 'Home', link: '/' },
      { text: 'Job Alerts', link: '/job-alerts' }
    ],
  },
  "/change-password" : {
    title : "Change Password",
    text : "Business plan draws on a wide range of knowledge from different business disciplines. Business draws on a wide range of different business.",
    breadcrumbs: [
      { text: 'Home', link: '/' },
      { text: 'Change Password', link: '/change-password' }
    ]
  }
};



const Banner = () => {
  const location = useLocation();
  const { pathname } = location;

  // Extracting dynamic 'id' from the job-details path
  const { id } = useParams();

  // Checking if the route exists in the routeTextMap
  const data = routeTextMap[pathname] || routeTextMap['/job-details/:id']; // Fallback for dynamic route

  if (!data) return null; // If route not found in map, don't render anything

  // Adjusting breadcrumbs if the route is a dynamic job-details route
  const breadcrumbs = data.breadcrumbs.map(crumb => {
    if (crumb.link === '/job-details/:id' && id) {
      return { ...crumb, link: `/job-details/${id}` }; // Replace the dynamic part with the actual ID
    }
    return crumb;
  });

  const { title, text } = data;

  return (
    <div className="relative bg-blue-700 text-white py-20 px-6 md:px-20 overflow-hidden">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('https://demo.graygrids.com/themes/jobgrids/assets/images/breadcrumb/breadcrumb-bg.jpg')` }}
      ></div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-6xl text-left">
        <h1 className="text-4xl font-bold mb-4 text-left">{title}</h1>
        <div className="h-1 w-24 bg-white mb-6"></div>
        <p className="text-lg leading-relaxed max-w-2xl text-left">{text}</p>

        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 mt-10 text-sm text-left flex-wrap">
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="flex items-center">
              {index > 0 && <span className="mx-2">|</span>}
              <Link to={crumb.link} className="hover:underline">
                {crumb.text}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;

