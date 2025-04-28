// src/components/Home.jsx
import React from 'react';
import Footer from './Footer'; // Make sure this path is correct based on where Footer.jsx is located
import EmployerDashboard from './dashbord';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-grow p-8 text-center">
        <EmployerDashboard></EmployerDashboard>  
      </main>
       
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Home;
