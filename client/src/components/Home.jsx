// src/components/Home.jsx
import React from 'react';
import Footer from './Footer'; // Make sure this path is correct based on where Footer.jsx is located

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-grow p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to TeachersJobPortal</h1>
        <p className="text-gray-600">Your dashboard and job listings will appear here.</p>
      </main>
       
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Home;
