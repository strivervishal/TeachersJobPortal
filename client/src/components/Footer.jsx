import React from 'react';

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaApple,
  FaGooglePlay,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#f8f9fd] text-[#3c3e56] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* App Download Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-[#0a0a0a] mb-4">Download Our Best Apps</h2>
          <p className="mb-6 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 text-sm rounded transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg">
                <FaApple />
                App Store
              </button>
            </a>

            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 text-sm rounded transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg">
                <FaGooglePlay />
                Google Play
              </button>
            </a>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
          {/* Brand Section */}
          <div className="min-w-[200px]">
            <div className="flex items-center mb-4 text-lg font-bold">
              <span className="bg-blue-600 text-white px-2 py-1 rounded">Job</span>
              <span className="bg-black text-white px-2 py-1 rounded ml-1">Grids</span>
            </div>
            <div className="text-left">
              <p className="mb-3 text-gray-600 text-sm">
                Start building your creative website with our awesome template Massive.
              </p>
              <p className="text-gray-700 text-sm mb-1">
                <strong className="text-gray-900">Address:</strong> Numetry Technology, Pune, India
              </p>
              <p className="text-gray-700 text-sm mb-1">
                <strong className="text-gray-900">Email:</strong> NumetryTechnology@gmail.com
              </p>
              <p className="text-gray-700 text-sm mb-3">
                <strong className="text-gray-900">Call:</strong> 9764284982
              </p>
              <div className="flex gap-2 mt-4 flex-wrap">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <div className="bg-[#eaeaea] p-2 rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-110 hover:shadow-lg">
                    <FaFacebookF />
                  </div>
                </a>
                <a href="https://Twitter.com" target="_blank" rel="noopener noreferrer">
                  <div className="bg-[#eaeaea] p-2 rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-110 hover:shadow-lg">
                    <FaTwitter />
                  </div>
                </a>
                <a href="https://pinterest.com/" target="_blank" rel="noopener noreferrer">
                  <div className="bg-[#eaeaea] p-2 rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-110 hover:shadow-lg">
                    <FaPinterestP />
                  </div>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <div className="bg-[#eaeaea] p-2 rounded transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-110 hover:shadow-lg">
                    <FaLinkedinIn />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* For Candidates */}
          <div className="min-w-[200px]">
            <h3 className="text-lg font-semibold mb-4">For Candidates</h3>
            <ul className="space-y-2">
              {[
                'User Dashboard',
                'CV Packages',
                'Jobs Featured',
                'Jobs Urgent',
                'Candidate List',
                'Candidates Grid',
              ].map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-blue-600 hover:underline underline-offset-2 transition-all"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* For Employers */}
          <div className="min-w-[200px]">
            <h3 className="text-lg font-semibold mb-4">For Employers</h3>
            <ul className="space-y-2">
              {[
                'Post New',
                'Employer List',
                'Employers Grid',
                'Job Packages',
                'Jobs Listing',
                'Jobs Featured',
              ].map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-blue-600 hover:underline underline-offset-2 transition-all"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>


          {/* Newsletter */}
          <div className="min-w-[200px]">
            <h3 className="text-lg font-semibold mb-4">Join Our Newsletter</h3>
            <p className="mb-4">Subscribe to get the latest jobs posted, candidates...</p>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
            />
            <button className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg">
              Subscribe Now!
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 border-t pt-6 gap-2 text-center md:text-left">
          <p>
            Designed and Developed by <strong className="text-[#0a0a0a]">GrayGrids</strong>
          </p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-6">
            <a href="#">Terms of use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Faq</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
