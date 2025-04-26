import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Banner from './Banner';
import Footer from './Footer';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobDetails = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const job = state?.job;

  const [isSaved, setIsSaved] = useState(state?.isSaved || false);
  const [isApplied, setIsApplied] = useState(state?.isApplied || false);

  if (!job) {
    return (
      <div className="p-10 text-center text-gray-500 text-xl">
        No job data found. Please go back and select a job again.
      </div>
    );
  }

  const handleSaveJob = async () => {
    try {
      await axios.post('http://localhost:5000/api/jobs/save', {
        jobId: id,
        title: job.title,
        company: job.company,
        location: job.location,
      });
      setIsSaved(true);
      Swal.fire('Success', 'Saved successfully!', 'success');
    } catch (error) {
      console.error('Error saving job:', error);
      Swal.fire('Error', 'Failed to save job.', 'error');
    }
  };

  const handleApplyJob = async () => {
    try {
      await axios.post('http://localhost:5000/api/jobs/apply', {
        jobId: id,
        title: job.title,
        company: job.company,
        location: job.location,
      });
      setIsApplied(true);
      Swal.fire('Success', 'Applied successfully!', 'success');
    } catch (error) {
      console.error('Error applying for job:', error);
      Swal.fire('Error', 'Failed to apply for job.', 'error');
    }
  };

  return (
    <>
      <Banner />
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">{job.title}</h2>
                <p className="text-gray-500">{job.company} @ {job.location}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">$5000 - $8000</p>
                <span className="inline-block mt-1 px-2 py-1 text-xs font-medium text-white bg-indigo-600 rounded">
                  {job.type}
                </span>
              </div>
            </div>

            {/* Job Description */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Job Description</h3>
              <p className="text-gray-600 mb-4">
                Join our dynamic team at this organization where innovation meets excellence! You'll play a key role in shaping the future of our industry.
              </p>
              <p className="text-gray-600">
                This position offers growth, impact, and the chance to work with a talented, supportive team.
              </p>
            </div>

            {/* Responsibilities */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Responsibilities</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Proven work experience as a web designer</li>
                <li>Proficiency in HTML, CSS and JavaScript</li>
                <li>Experience working in Agile/Scrum teams</li>
                <li>Creative problem-solving and user interaction design</li>
              </ul>
            </div>

            {/* Education + Experience */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Education + Experience</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>3+ years in web/graphic design</li>
                <li>Degree in HCI, Visual Arts or related</li>
                <li>Excellent communication and feedback handling</li>
              </ul>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">

            {/* Buttons */}
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <button
                className={`w-full mb-4 px-4 py-2 font-medium border rounded ${
                  isSaved
                    ? 'text-green-600 border-green-600 bg-green-50 cursor-not-allowed'
                    : 'text-indigo-600 border-indigo-600 hover:bg-indigo-50'
                }`}
                onClick={handleSaveJob}
                disabled={isSaved}
              >
                {isSaved ? 'Saved' : 'Save Job'}
              </button>
              <button
                className={`w-full px-4 py-2 font-medium text-white rounded ${
                  isApplied
                    ? 'bg-green-600 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
                onClick={handleApplyJob}
                disabled={isApplied}
              >
                {isApplied ? 'Applied' : 'Apply Now'}
              </button>
            </div>

            {/* Job Overview */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Job Overview</h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Published on:</strong> Nov 6, 2023</li>
                <li><strong>Vacancy:</strong> 02</li>
                <li><strong>Status:</strong> Full-time</li>
                <li><strong>Experience:</strong> 2 to 3 years</li>
                <li><strong>Location:</strong> Wilshire Glen</li>
                <li><strong>Salary:</strong> $5k - $8k</li>
                <li><strong>Gender:</strong> Any</li>
                <li><strong>Deadline:</strong> Dec 15, 2023</li>
              </ul>
            </div>

            {/* Location Map */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Job Location</h3>
              <iframe
                title="job-location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.924837406303!2d-74.00601528459424!3d40.712775779330454"
                width="100%"
                height="200"
                allowFullScreen=""
                loading="lazy"
                className="rounded"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobDetails;
