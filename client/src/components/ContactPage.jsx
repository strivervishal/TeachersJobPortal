import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Footer from "./Footer";
import Banner from "./Banner";

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    name: e.target[0].value,
    subject: e.target[1].value,
    email: e.target[2].value,
    phone: e.target[3].value,
    message: e.target[4].value,
  };

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    alert(data.message || data.error);

    e.target.reset();
  } catch (err) {
    alert("Failed to submit form. Please try again.");
  }
};

const ContactPage = () => {
  return (
    <>
      <Banner/>

      {/* Contact Section */}
      <section className="pb-12 pt-24  bg-gray-100 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-[0_4px_20px_-4px_rgba(0,0,0,0.15)] overflow-hidden">
            {/* Form - 60% */}
            <div className="w-full lg:w-3/5 p-12">
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-8">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 text-base px-5 py-3 rounded-md focus:outline-none focus:ring-0 focus:ring-[#0d6efd]"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Your Subject"
                    className="w-full border border-gray-300 text-base px-5 py-3 rounded-md focus:outline-none focus:ring-0 focus:ring-[#0d6efd]"
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border border-gray-300 text-base px-5 py-3 rounded-md focus:outline-none focus:ring-0 focus:ring-[#0d6efd]"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Your Phone"
                    className="w-full border border-gray-300 text-base px-5 py-3 rounded-md focus:outline-none focus:ring-0 focus:ring-[#0d6efd]"
                    required
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full border border-gray-300 text-base px-5 py-3 rounded-md focus:outline-none focus:ring-0 focus:ring-[#0d6efd]"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#0d6efd] text-white text-base px-8 py-3 rounded-md hover:bg-[#0b5ed7] transition"
                >
                  Submit Message
                </button>
              </form>
            </div>

            {/* Contact Info - 40% */}
            <div className="w-full lg:w-2/5 p-12 bg-white text-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Information
              </h3>
              <p className="text-base text-gray-600 mb-8">
                Business consulting excepteur sint occaecat cupidatat consulting
                non proident.
              </p>
              <div className="space-y-6 text-base">
                <div className="flex items-start gap-4 text-gray-700">
                  <FaPhoneAlt className="text-[#0d6efd] mt-1" />
                  <span>+522 672-452-1120</span>
                </div>
                <div className="flex items-start gap-4 text-gray-700">
                  <FaEnvelope className="text-[#0d6efd] mt-1" />
                  <a href="mailto:example@yourwebsite.com">
                    example@yourwebsite.com
                  </a>
                </div>
                <div className="flex items-start gap-4 text-gray-700">
                  <FaMapMarkerAlt className="text-[#0d6efd] mt-1" />
                  <span>
                    KA-62/1, Travel Agency, 45 Grand Central Terminal, New York.
                  </span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="mt-15">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Follow Us on
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#e0f0ff] text-[#0d6efd] p-1 rounded-full hover:bg-[#0d6efd] hover:text-white transition"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://x.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#e0f0ff] text-[#0d6efd] p-1 rounded-full hover:bg-[#0d6efd] hover:text-white transition"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#e0f0ff] text-[#0d6efd] p-1 rounded-full hover:bg-[#0d6efd] hover:text-white transition"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://www.pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#e0f0ff] text-[#0d6efd] p-1 rounded-full hover:bg-[#0d6efd] hover:text-white transition"
                  >
                    <FaPinterestP />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <div className="w-full px-5 pb-5 bg-gray-100">
        <div className="max-w-screen-xl mx-auto">
          <div className="w-full">
            <div className="relative h-[400px] text-right p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.15)] bg-white rounded-lg box-border">
              <iframe
                className="w-full h-full border-0"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                allowFullScreen
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ContactPage;
