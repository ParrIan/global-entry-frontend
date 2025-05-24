import React, { useState } from "react";
import { Check } from "lucide-react";

const Pricing = () => {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Basic",
      description: "For casual travelers who need a Global Entry appointment",
      price: annual ? 49 : 5,
      features: [
        "Check 1 location for availability",
        "Email notifications",
        "Daily appointment scanning",
        "30-day history"
      ],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Premium",
      description: "For frequent travelers who need faster appointments",
      price: annual ? 99 : 10,
      features: [
        "Check up to 5 locations for availability",
        "Email & SMS notifications",
        "Hourly appointment scanning",
        "90-day history",
        "Priority booking assistance"
      ],
      cta: "Get Started",
      highlighted: true
    },
    {
      name: "Enterprise",
      description: "For businesses and families who need multiple appointments",
      price: annual ? 199 : 20,
      features: [
        "Check unlimited locations for availability",
        "Email, SMS & push notifications",
        "Real-time appointment scanning",
        "Unlimited history",
        "Guaranteed appointment or money back",
        "24/7 premium support"
      ],
      cta: "Get Started",
      highlighted: false
    }
  ];

  return (
    <div id="pricing" className="py-20 px-6 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end mb-6">
          <div className="inline-flex items-center p-1 rounded-full bg-white border border-gray-200">
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-full ${
                annual ? "bg-gray-900 text-white" : "text-gray-700"
              }`}
            >
              Annual
            </button>
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-full ${
                !annual ? "bg-gray-900 text-white" : "text-gray-700"
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-sm overflow-hidden ${
                plan.highlighted ? "border-2 border-blue-500" : "border border-gray-200"
              }`}
            >
              {plan.highlighted && (
                <div className="bg-blue-500 py-2 text-white text-center font-medium">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-gray-600 mt-2 mb-6">{plan.description}</p>

                <div className="mb-8">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-gray-500 ml-2">/{annual ? "year" : "month"}</span>
                  {annual && (
                    <div className="text-green-600 text-sm mt-1">Save 20% with annual billing</div>
                  )}
                </div>

                <button
                  className={`w-full py-3 px-4 rounded-md font-medium mb-8 ${
                    plan.highlighted
                      ? "bg-blue-500 hover:bg-blue-600 text-white"
                      : "bg-black hover:bg-gray-800 text-white"
                  }`}
                >
                  {plan.cta}
                </button>

                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;