import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b-4 border-gray-900 py-4 px-6 md:px-12 relative">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(0,0,0,0.1) 10px,
            rgba(0,0,0,0.1) 20px
          )`
        }}></div>
      </div>

      <div className="relative z-10 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          {/* Logo/Icon */}
          <div className="relative">
            <div className="w-12 h-12 bg-gray-900 rounded-full border-3 border-gray-900 flex items-center justify-center text-white font-black text-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              ✈️
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-gray-900 animate-pulse"></div>
          </div>

          <div className="font-black text-2xl text-gray-900">
            <a href="#">EntryExpediter</a>
          </div>
        </div>

        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-6">
            <a href="#" className="relative text-gray-900 font-bold hover:text-gray-700 transition-colors group">
              Home
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gray-900 transform scale-x-100"></span>
            </a>
            <a href="#dashboard" className="text-gray-600 font-bold hover:text-gray-900 transition-colors group">
              Dashboard
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </a>
            <a href="#pricing" className="text-gray-600 font-bold hover:text-gray-900 transition-colors group">
              Pricing
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-900 font-bold hover:text-gray-700 transition-colors">
              Sign in
            </a>
            <a
              href="#"
              className="px-6 py-2.5 bg-gray-900 text-white rounded-lg font-bold border-3 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              Get Started 🚀
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;