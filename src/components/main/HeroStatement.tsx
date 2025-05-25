import React, { useState } from "react";

const HeroStatement = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className="relative overflow-hidden pt-16 pb-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" style={{ opacity: 0.3 }}>
          <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1.5" fill="#9CA3AF" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Subtle floating shapes */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gray-200 rounded-full opacity-30 animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gray-300 rounded-lg opacity-20 animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute top-40 right-40 w-16 h-16 bg-gray-200 opacity-20 animate-spin" style={{ animationDuration: '8s', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="flex flex-col">
          <div className="flex items-center mb-6">
            <div className="bg-white text-gray-900 text-sm font-bold px-5 py-2.5 rounded-full border-3 border-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              🎯 Never miss an appointment!
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight">
            Get Your <span className="text-blue-600 relative">
              Global Entry
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8">
                <path d="M0 7 Q50 0 100 7 T200 7" stroke="#2563EB" strokeWidth="3" fill="none"/>
              </svg>
            </span>
            <br/>Appointment Fast!
          </h1>

          <p className="text-lg text-gray-700 mb-8 max-w-lg font-medium">
            We check for appointments every few minutes and text you instantly when one opens up. It's that simple!
            <span className="inline-block ml-1">✨</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold text-lg border-3 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
              onClick={handleSubmit}
            >
              Get Started →
            </button>
            <a
              href="#how-it-works"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg border-3 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all text-center"
            >
              How it Works
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-6 mt-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full border-3 border-gray-900 flex items-center justify-center font-bold text-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                ✓
              </div>
              <div>
                <div className="font-bold text-gray-900">2,847</div>
                <div className="text-sm text-gray-600">Happy travelers</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full border-3 border-gray-900 flex items-center justify-center font-bold text-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                ⚡
              </div>
              <div>
                <div className="font-bold text-gray-900">3 min</div>
                <div className="text-sm text-gray-600">Alert speed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Visual Element */}
        <div className="relative">
          {/* Main illustration container */}
          <div className="relative bg-white rounded-3xl border-4 border-gray-900 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-12 overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  #000000,
                  #000000 10px,
                  transparent 10px,
                  transparent 20px
                )`
              }}></div>
            </div>

            {/* Your globe animation will go here */}
            <div className="relative z-10 flex items-center justify-center h-64 animate-bounce" style={{ animationDuration: '2s' }}>
              {/* Placeholder for your animation */}
              <div className="text-center">
                <div className="text-6xl mb-4">
                  🌍✈️
                </div>
                <p className="font-bold text-gray-900 text-xl">Your animation here!</p>
              </div>
            </div>

            {/* Fun location markers - these would be colored in your animations */}
            <div className="absolute top-8 left-8 animate-pulse">
              <div className="bg-gray-300 w-8 h-8 rounded-full border-3 border-gray-900"></div>
              <div className="bg-gray-300 w-1 h-12 ml-3.5 border-x-2 border-gray-900"></div>
            </div>
            <div className="absolute bottom-8 right-8 animate-pulse" style={{ animationDelay: '1s' }}>
              <div className="bg-gray-300 w-8 h-8 rounded-full border-3 border-gray-900"></div>
              <div className="bg-gray-300 w-1 h-12 ml-3.5 border-x-2 border-gray-900"></div>
            </div>
          </div>

          {/* Floating notification card */}
          <div className="absolute -left-4 lg:-left-8 bottom-6 bg-white rounded-2xl p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] max-w-[280px] border-3 border-gray-900 animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl border-3 border-gray-900">
                🔔
              </div>
              <div>
                <div className="font-bold text-gray-900">New Spot Available!</div>
                <div className="text-sm text-gray-700">SFO - Tomorrow 2:30 PM</div>
                <div className="text-sm font-bold text-blue-600 mt-1">Book now! →</div>
              </div>
            </div>
          </div>

          {/* Stats badge */}
          <div className="absolute -right-4 top-6 bg-white rounded-2xl p-3 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] border-3 border-gray-900">
            <div className="text-3xl mb-1">📍</div>
            <div className="font-bold text-gray-900">5 Locations</div>
            <div className="text-xs text-gray-700">Monitoring</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroStatement;