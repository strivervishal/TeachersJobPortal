import React, { useEffect, useState } from 'react';
import Footer from './Footer';

function AddJob() {
  const [logoFileName, setLogoFileName] = useState("");
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobDescription: "",
    companyDescription: "",
    isAgreed: false,
  });

  const handleLogoChange = (e) => {
    if (e.target.files.length > 0) {
      setLogoFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async () => {
    const jobPayload = {
      ...formData,
      jobCategory: document.querySelector("#jobCategory")?.value,
      jobType: document.querySelector("#jobType")?.value,
      applicationDeadline: document.querySelector("#applicationDeadline")?.value,
      salaryCurrency: document.querySelector("#salaryCurrency")?.value,
      companyName: document.querySelector("#companyName")?.value,
      companyWebsite: document.querySelector("#companyWebsite")?.value,
      companyIndustry: document.querySelector("#companyIndustry")?.value,
      socialLinks: {
        facebook: document.querySelector("#facebook")?.value,
        linkedin: document.querySelector("#linkedin")?.value,
        twitter: document.querySelector("#twitter")?.value,
        instagram: document.querySelector("#instagram")?.value,
      },
      recruiter: {
        fullName: document.querySelector("#recruiterName")?.value,
        email: document.querySelector("#recruiterEmail")?.value,
      },
      logoFileName: logoFileName,
    };

    try {
      const response = await fetch("http://localhost:5000/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobPayload),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Job posted successfully!");
        // Reset form if needed
      } else {
        alert("Error: " + data.message);
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Failed to post job.");
    }
  };

  return (
    <div className="bg-[#f7fafd] min-h-screen">
      <div className="max-w-5xl mx-auto py-12 px-6">
        <div className="bg-white p-8 shadow rounded-xl space-y-12">

          {/* Job Information Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-6">Job Information</h2>

            <div className="mb-6">
              <label className="block text-sm mb-1 font-medium">Job Title*</label>
              <input
                className="border p-3 rounded w-full"
                placeholder="Job title*"
                value={formData.jobTitle}
                onChange={(e) =>
                  setFormData({ ...formData, jobTitle: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-1 font-medium">Job Category</label>
                <select id="jobCategory" className="border p-3 rounded w-full">
                  <option>UX/UI Designer</option>
                  <option>Web Developer</option>
                  <option>Web Designer</option>
                  <option>Software Developer</option>
                  <option>SEO</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-1 font-medium">Job Type</label>
                <select id="jobType" className="border p-3 rounded w-full">
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Contract</option>
                  <option>Internship</option>
                  <option>Office</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-1 font-medium">Application Deadline</label>
                <input type="date" id="applicationDeadline" className="border p-3 rounded w-full" />
              </div>

              <div>
                <label className="block text-sm mb-1 font-medium">Salary Currency</label>
                <select id="salaryCurrency" className="border p-3 rounded w-full">
                  <option>Default</option>
                  <option>20000 to 30000</option>
                  <option>40000 to 50000</option>
                  <option>60000 to 70000</option>
                  <option>80000 to 90000</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm mb-1 font-medium">Job Description*</label>
              <textarea
                className="border p-3 rounded w-full"
                rows="4"
                placeholder="Job Description*"
                value={formData.jobDescription}
                onChange={(e) =>
                  setFormData({ ...formData, jobDescription: e.target.value })
                }
              ></textarea>
            </div>
          </div>

          {/* Company Information Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-6">Company Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input id="companyName" className="border p-3 rounded w-full" placeholder="Company Name" />
              <input id="companyWebsite" className="border p-3 rounded w-full" placeholder="Company Website" />
              <input id="companyIndustry" className="border p-3 rounded w-full" placeholder="Company Industry" />
              <input id="facebook" className="border p-3 rounded w-full" placeholder="Facebook Page (Link)" />
              <input id="linkedin" className="border p-3 rounded w-full" placeholder="Linkedin Page (Link)" />
              <input id="twitter" className="border p-3 rounded w-full" placeholder="Twitter Page (Link)" />
              <input id="instagram" className="border p-3 rounded w-full" placeholder="Instagram Page (Link)" />
            </div>

            <div className="mt-6">
              <label className="block text-sm mb-1 font-medium">Company Description*</label>
              <textarea
                className="border p-3 rounded w-full"
                rows="4"
                placeholder="Company Description*"
                value={formData.companyDescription}
                onChange={(e) =>
                  setFormData({ ...formData, companyDescription: e.target.value })
                }
              ></textarea>
            </div>

            <div className="mt-4">
              <label className="block mb-2 font-medium">Logo (Optional)</label>
              Select image: 
              <div className="flex items-center space-x-4">
                <label
                  htmlFor="logo-upload"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded cursor-pointer"
                >
                  Choose File
                </label>
                <input
                  id="logo-upload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleLogoChange}
                />
                {logoFileName && (
                  <p className="text-sm text-gray-700">
                    Selected file: <span className="font-medium">{logoFileName}</span>
                  </p>
                )}
              </div>

              <small className="text-gray-500 font-bold">Maximum file size: 2 MB</small>
            </div>
          </div>

          {/* Recruiter Information */}
          <div>
            <h2 className="text-xl font-semibold mt-10 mb-6">Recruiter Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input id="recruiterName" className="border p-3 rounded w-full" placeholder="Full Name" />
              <input id="recruiterEmail" className="border p-3 rounded w-full" placeholder="Email" />
            </div>

            <div className="mt-6 flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.isAgreed}
                onChange={(e) =>
                  setFormData({ ...formData, isAgreed: e.target.checked })
                }
              />
              <label>
                By clicking checkbox, you agree to our
                <a href="#" className="text-blue-600 ml-1">Terms & Conditions</a> and
                <a href="#" className="text-blue-600 ml-1">Privacy Policy</a>.
              </label>
            </div>

            <button
              className="mt-6 bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={
                !formData.jobTitle ||
                !formData.jobDescription ||
                !formData.companyDescription ||
                !formData.isAgreed
              }
              onClick={handleSubmit}
            >
              Post A Job
            </button>
          </div>
        </div>
      </div>
       {/* Add Footer at the bottom */}
       <Footer />
          
    </div>
  );
}

export default AddJob;
