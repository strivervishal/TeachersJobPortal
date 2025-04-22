import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Footer from './Footer';

const allResumes = [
  {
    id: 1,
    name: 'Arielle Terry',
    role: 'Web Developer',
    experience: '3-5 years',
    rate: '$30',
    location: 'Cupertino, CA, USA',
    skills: ['Php', 'jQuery', 'WordPress', 'CSS3', 'HTML5'],
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    expLabel: 'Exp. 4 Year',
  },
  {
    id: 2,
    name: 'Jack London',
    role: 'UX/UI Designer',
    experience: '3-5 years',
    rate: '$30',
    location: 'Cupertino, CA, USA',
    skills: ['Php', 'jQuery', 'WordPress', 'CSS3', 'HTML5'],
    image: 'https://randomuser.me/api/portraits/men/19.jpg',
    expLabel: 'Exp. 5 Year',
  },
  {
    id: 3,
    name: 'Daniel Robert',
    role: 'Unity Developer',
    experience: '3-5 years',
    rate: '$30',
    location: 'Cupertino, CA, USA',
    skills: ['Php', 'jQuery', 'WordPress', 'CSS3', 'HTML5'],
    image: 'https://randomuser.me/api/portraits/men/18.jpg',
    expLabel: 'Exp. 5 Year',
  },
  {
    id: 4,
    name: 'Jesse R. Chung',
    role: 'PHP Developer',
    experience: '3-5 years',
    rate: '$30',
    location: 'Cupertino, CA, USA',
    skills: ['Php', 'jQuery', 'WordPress', 'CSS3', 'HTML5'],
    image: 'https://randomuser.me/api/portraits/men/19.jpg',
    expLabel: 'Exp. 5 Year',
  },
  {
    id: 5,
    name: 'Jack London',
    role: 'UX/UI Designer',
    experience: '3-5 years',
    rate: '$30',
    location: 'Cupertino, CA, USA',
    skills: ['Php', 'jQuery', 'WordPress', 'CSS3', 'HTML5'],
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
    expLabel: 'Exp. 5 Year',
  },
  {
    id: 6,
    name: 'Arielle Terry',
    role: 'Web Developer',
    experience: '3-5 years',
    rate: '$30',
    location: 'Cupertino, CA, USA',
    skills: ['Php', 'jQuery', 'WordPress', 'CSS3', 'HTML5'],
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    expLabel: 'Exp. 4 Year',
  },
  {
    id: 7,
    name: 'Jesse R. Chung',
    role: 'PHP Developer',
    experience: '3-5 years',
    rate: '$30',
    location: 'Cupertino, CA, USA',
    skills: ['Php', 'jQuery', 'WordPress', 'CSS3', 'HTML5'],
    image: 'https://randomuser.me/api/portraits/men/19.jpg',
    expLabel: 'Exp. 5 Year',
  },
];

const ITEMS_PER_PAGE = 4;

const BrowseResume = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [resumes, setResumes] = useState();
  const [totalpages, setTotalPages] = useState()

  const totalPages = Math.ceil(allResumes.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentResumes = allResumes.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const fetchResumes = async (page) => {
    try {
      const response = await fetch(`http://localhost:5000/api/resumes?page=${page}&limit=${ITEMS_PER_PAGE}`);
      const data = await response.json();
      setResumes(data.resumes);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error fetching resumes:', error);
    }
  };

  useEffect(() => {
    fetchResumes(currentPage);
  }, [currentPage])

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <Banner/>
      <div className="flex  flex-wrap lg:flex-nowrap justify-center items-start mx-auto p-4 bg-[#f5f9ff] min-h-screen font-[Segoe UI]">
      <div className="bg-white p-6 max-w-6xl rounded-xl shadow-sm space-y-6">
        {currentResumes.map((user) => (
          <div
            key={user.id}
            className="flex flex-col md:flex-row gap-6 border-b border-gray-300 pb-6 last:border-none last:pb-0"
          >
            <img
              src={user.image}
              alt={user.name}
              className="w-32 h-32 object-cover rounded-lg"
            />

            <div className="flex-1 space-y-2">
              <div className="flex justify-between flex-wrap">
                <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
                <span className="bg-blue-600 text-white text-sm px-4 py-1 rounded-md mt-2 md:mt-0">
                  {user.expLabel}
                </span>
              </div>

              <p className="text-gray-500">{user.role}</p>

              <div className="text-sm text-gray-700">
                <p>
                  <strong>Experience:</strong>{' '}
                  <span className="text-blue-600">{user.experience}</span>
                </p>
                <p>
                  <strong>Hour Rate:</strong>{' '}
                  <span className="text-blue-600">{user.rate}</span>
                </p>
                <p className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4 text-gray-500 inline"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 12.414A2 2 0 0112 11V7a2 2 0 012-2h2.586a2 2 0 011.414.586l4.243 4.243a2 2 0 010 2.828l-4.243 4.243a2 2 0 01-2.828 0z"
                    />
                  </svg>
                  {user.location}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                {user.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-indigo-100 text-indigo-700 text-xs font-medium px-3 py-1 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-500 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
                qui aspernatur accusantium! Molestiae, cum cupiditate nam optio
                dignissimos magnam velit, perspiciatis amet qui aut nobis,
                quisquam, laudantium vitae eos ipsam.
              </p>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="flex justify-center pt-6">
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
    <Footer/>
    </>
  );
};

export default BrowseResume;