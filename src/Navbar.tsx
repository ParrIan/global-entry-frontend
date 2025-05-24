import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-50 py-4 px-6 md:px-12 flex justify-between items-center">
      <div className="font-bold text-xl text-blue-600">
        <a href="#">EntryExpediter</a>
      </div>

      <div className="flex items-center space-x-8">
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-900 hover:text-blue-600 border-b-2 border-black">Home</a>
          <a href="#dashboard" className="text-gray-500 hover:text-blue-600">Dashboard</a>
          <a href="#pricing" className="text-gray-500 hover:text-blue-600">Pricing</a>
        </div>

        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-900 font-medium">Sign in</a>
          <a
            href="#"
            className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;