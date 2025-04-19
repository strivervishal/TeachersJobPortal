import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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
  "/contact": {
    title: "Contact Us",
    text: "Business plan draws on a wide range of knowledge from different business disciplines. Business draws on a wide range of different business.",
    breadcrumbs: [
      { text: 'Home', link: '/' },
      { text: 'Contact Us', link: '/contact' }
    ],
  },
};



const Banner = () => {
  const location = useLocation();
  const { pathname } = location;

  const data = routeTextMap[pathname];

  if (!data) return null; // If route not found in map, don't render anything

  const { title, text, breadcrumbs } = data;

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

