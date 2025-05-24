import React from "react";
import { Calendar, Bell, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <div className="bg-blue-100 rounded-full p-4"><Calendar className="h-6 w-6 text-blue-600" /></div>,
      title: "Select Your Locations",
      description: "Choose which enrollment centers you want to monitor for available appointments."
    },
    {
      icon: <div className="bg-purple-100 rounded-full p-4"><Bell className="h-6 w-6 text-purple-600" /></div>,
      title: "Get Instant Notifications",
      description: "Receive real-time alerts via email, SMS, or app notification when appointments become available."
    },
    {
      icon: <div className="bg-green-100 rounded-full p-4"><CheckCircle className="h-6 w-6 text-green-600" /></div>,
      title: "Book Your Appointment",
      description: "Click the link in your notification to book your slot before someone else does."
    }
  ];

  return (
    <div className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-blue-100 rounded-full">
            <span className="text-sm text-blue-700">How It Works</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Simple process, life-changing results
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            EntryExpediter makes securing a Global Entry appointment fast and easy with our three-step process.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-8 rounded-lg border border-gray-100 shadow-sm relative"
            >
              <div className="flex-shrink-0 mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-block px-6 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors"
          >
            Start Monitoring Appointments
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;