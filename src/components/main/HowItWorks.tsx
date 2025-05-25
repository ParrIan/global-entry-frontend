import React from "react";
import { Calendar, Bell, CheckCircle, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      emoji: "📍",
      icon: <Calendar className="h-6 w-6" />,
      title: "Select Your Locations",
      description: "Choose which enrollment centers you want to monitor for available appointments."
    },
    {
      number: "02",
      emoji: "🔔",
      icon: <Bell className="h-6 w-6" />,
      title: "Get Instant Notifications",
      description: "Receive real-time alerts via email or SMS when appointments become available."
    },
    {
      number: "03",
      emoji: "✅",
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Book Your Appointment",
      description: "Click the link in your notification to book your slot before someone else does."
    }
  ];

  return (
    <div className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#000000" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2.5 bg-white rounded-full border-3 border-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-4">
            <span className="text-sm font-bold text-gray-900">🚀 How It Works</span>
          </div>
          <h2 className="font-black text-5xl text-gray-900 mb-6">
            Three Simple Steps
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-medium">
            Getting your Global Entry appointment has never been easier. Here's how EntryExpediter works its magic.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-2xl border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 group"
            >
              {/* Step number badge */}
              <div className="absolute -top-5 -right-5 w-14 h-14 bg-gray-900 text-white rounded-full flex items-center justify-center font-black text-lg border-3 border-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                {step.number}
              </div>

              {/* Emoji icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-200">
                {step.emoji}
              </div>

              <h3 className="font-black text-2xl text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>

              {/* Arrow to next step (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-12 transform -translate-y-1/2 text-gray-400 z-10">
                  <ArrowRight className="w-8 h-8" strokeWidth={3} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold text-lg border-3 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all inline-flex items-center group">
            Start Monitoring Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-4 text-gray-600 font-medium">
            Join 2,847+ travelers who found their appointments
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;