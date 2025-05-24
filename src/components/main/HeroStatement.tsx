import React, { useState } from "react";

const HeroStatement = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log("Email submitted:", email);
  };

  return (
    <div className="relative overflow-hidden pt-16 pb-20 px-6 md:px-12 lg:px-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />

      {/* Abstract shapes */}
      <div className="absolute top-32 right-0 w-64 h-64 rounded-full bg-purple-100 blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-32 left-0 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="flex flex-col">
          <div className="flex items-center mb-6">
            <div className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
              Never miss an appointment again
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4">
            Get notified when Global Entry appointments are available
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            EntryExpediter monitors Global Entry appointment slots 24/7 and sends you instant notifications when slots open up at your preferred locations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              className="bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-medium"
              onClick={handleSubmit}
            >
              Get Started
            </button>
            <a
              href="#how-it-works"
              className="border border-gray-300 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center"
            >
              How it works
            </a>
          </div>
        </div>

        {/* Right Column - Black Box */}
        <div className="relative">
          {/* Simple black box placeholder */}
          <div className="bg-black w-full aspect-video rounded-2xl shadow-xl"></div>

          {/* Floating notification */}
          <div className="absolute -left-12 bottom-20 bg-white rounded-lg p-4 shadow-lg max-w-[240px] border border-gray-100">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              </div>
              <div>
                <div className="text-lg font-large"><strong>Map Navigation or International Flight Icon</strong></div>
                {/* <div className="text-xs text-gray-600 mt-1">Get real-time alerts when appointments open up</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroStatement;