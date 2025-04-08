/*
  Example usage of the Banner component:

  <Banner
    title="Manage Resumes"
    text="Business plan draws on a wide range of knowledge from different business disciplines. Business draws on a wide range of different business."
    breadcrumbs={[
      { text: 'Home', link: '/' },
      { text: 'Manage Resumes', link: '/manage-resumes' }
    ]}
  />

  - `title`: The main heading of the banner.
  - `text`: A short description or subtitle below the title.
  - `breadcrumbs`: Array of breadcrumb objects with `text` and `link` properties.
*/



import React from 'react';
import { Link } from 'react-router-dom'; // use this if you're using React Router

const Banner = ({ title, text, breadcrumbs }) => {
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
        <div className="flex items-center space-x-2 mt-10 text-sm text-left">
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
