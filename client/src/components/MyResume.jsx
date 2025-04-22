import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Sidebar from "./Sidebar"; // Import the Sidebar component

const MyResume = () => {
  return (
    <>
      <Banner />
      <div className="manage-container flex">
        {/* Use Sidebar Component */}
        <Sidebar />

        {/* Resume Section */}
        <div className="w-full md:w-2/3 lg:w-2/5 bg-white shadow-lg rounded-lg p-6 md:p-8 font-roboto">
          {/* Profile Header */}
          <div className="flex items-center gap-6 mb-6">
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="User"
              className="w-20 h-20 rounded-none"
            />
            <div>
              <h2 className="text-2xl font-poppins font-semibold text-gray-800">
                David Henricks
              </h2>
              <p className="text-gray-500 text-lg">Product Designer</p>
            </div>
          </div>

          {/* Contact Info moved to right */}
          <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
            <div className="w-full md:w-1/2">
              <div className="grid grid-cols-1 text-sm mb-4">
                <div><strong>Location:</strong> New York, USA</div>
                <div><strong>Email:</strong> youremail@gmail.com</div>
                <div><strong>Phone:</strong> +999 565 562</div>
                <div><strong>Website:</strong> yourwebsite.com</div>
              </div>

              {/* Social Links Section */}
              <div className="flex gap-3 text-black text-lg">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="mb-8">
            <h3 className="text-lg font-poppins font-semibold text-blue-600 mb-2">About</h3>
            <p className="text-gray-700 mb-2">
              A talented professional with an academic background in IT and proven commercial development experience as a C++ developer since 1999.
              Was involved in more than 140 software development outsourcing projects.
            </p>
            <p className="text-gray-700">
              Programming Languages: C/C++, .NET C++, Python, Bash, Shell, PERL, Regular expressions, Python, Active-script.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-lg font-poppins font-semibold text-blue-600 mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Agile", "Wireframing", "Prototyping", "Information",
                "Waterfall Model", "New Layout", "UI/UX Design",
                "Web Design", "Graphics Design"
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="mb-8">
            <h3 className="text-lg font-poppins font-semibold text-blue-600 mb-4">Work Experience</h3>
            {[
              {
                title: "Lead Product Designer",
                company: "Airbnb",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Airbnb_Logo_Belgium_2018.png",
                date: "Jun 2020 - April 2023 - 3 years",
                location: "New York, USA",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicMDzk5BVKCMaspR4wow1fC8Kt9fDI-ACBg&s"
              },
              {
                title: "Senior UI/UX Designer",
                company: "Google Inc",
                logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/Google_Logo.svg",
                date: "Jun 2020 - April 2023 - 3 years",
                location: "New York, USA",
                image: "https://images.icon-icons.com/2429/PNG/512/google_logo_icon_147282.png"
              }
            ].map((job, idx) => (
              <div key={idx} className="flex items-center gap-4 mb-4">
                <img
                  src={job.image}
                  alt={job.company}
                  className="w-12 h-12 rounded-md object-contain"
                />
                <div>
                  <h4 className="font-poppins font-semibold">{job.title}</h4>
                  <p className="text-sm text-gray-600">{job.company} | {job.date}</p>
                  <p className="text-xs text-gray-500">{job.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg font-poppins font-semibold text-blue-600 mb-4">Education</h3>
            {[
              {
                degree: "Masters in Art Design",
                school: "Harvard University",
                logo: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Harvard_University_logo_2019.svg",
                date: "Jun 2020 - April 2023 - 3 years",
                location: "Brylin, USA",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScAxKlQXyD9NAHR9brW_ryS53MTivZIBvfgYVfbvo34nDwat1w5FLQoytlPA16nsTavC4&usqp=CAU"
              },
              {
                degree: "Bachelor in Software Engineering",
                school: "Manipal Institute of Technology",
                logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Manipal_University_Logo.png",
                date: "Feb 2019 - April 2023 - 4 years",
                location: "New York, USA",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl6sc5q2Oj7uDA_z_ZpcPaMgY2xgPYyQpEfA&s"
              }
            ].map((edu, idx) => (
              <div key={idx} className="flex items-center gap-4 mb-4">
                <img
                  src={edu.image}
                  alt={edu.school}
                  className="w-12 h-12 rounded-md object-contain"
                />
                <div>
                  <h4 className="font-poppins font-semibold">{edu.degree}</h4>
                  <p className="text-sm text-gray-600">{edu.school} | {edu.date}</p>
                  <p className="text-xs text-gray-500">{edu.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyResume;
