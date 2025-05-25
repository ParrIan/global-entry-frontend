import React, { useState } from "react";
import { Check } from "lucide-react";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium'>('premium');

  const plans = [
    {
      id: 'basic',
      name: "Basic",
      emoji: "🎯",
      duration: "2 weeks",
      description: "Perfect for your first Global Entry appointment",
      price: 17,
      bgColor: "bg-green-400",
      features: [
        "📍 Monitor 1 location",
        "📧 Email notifications only",
        "⏰ Check every 3 minutes",
        "📅 14-day access",
      ],
      cta: "Start Basic",
      highlighted: false
    },
    {
      id: 'premium',
      name: "Premium",
      emoji: "⚡",
      duration: "1 month",
      description: "For travelers who need more flexibility",
      price: 25,
      bgColor: "bg-orange-400",
      features: [
        "📍 Monitor up to 5 locations",
        "📧 Email + 📱 SMS notifications",
        "⚡ Check every 1 minute",
        "📅 30-day access",
        "🌟 Priority support",
      ],
      cta: "Go Premium",
      highlighted: true
    }
  ];

  return (
    <div id="pricing" className="py-20 px-6 bg-blue-50 relative overflow-hidden">
      {/* Fun floating shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-300 opacity-20 animate-pulse" style={{ animationDuration: '3s', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-yellow-300 rounded-lg opacity-20 animate-spin" style={{ animationDuration: '10s' }}></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-3 bg-yellow-300 rounded-full border-4 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4">
            <span className="text-lg font-black text-gray-900">💸 Simple Pricing</span>
          </div>
          <h2 className="font-black text-5xl text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            Get started in seconds. Cancel anytime. No hidden fees!
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-2 rounded-full bg-white border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <button
              onClick={() => setSelectedPlan('basic')}
              className={`px-8 py-3 rounded-full font-bold text-lg transition-all ${
                selectedPlan === 'basic'
                  ? "bg-green-400 text-gray-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Basic (2 weeks)
            </button>
            <button
              onClick={() => setSelectedPlan('premium')}
              className={`px-8 py-3 rounded-full font-bold text-lg transition-all ${
                selectedPlan === 'premium'
                  ? "bg-orange-400 text-gray-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Premium (1 month)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative transition-all duration-300 ${
                selectedPlan === plan.id ? "scale-105" : "scale-100 opacity-90"
              }`}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-red-500 text-white px-6 py-2 rounded-full border-3 border-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-bold text-sm animate-bounce" style={{ animationDuration: '2s' }}>
                    🔥 MOST POPULAR
                  </div>
                </div>
              )}

              <div className={`bg-white rounded-2xl border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all`}>
                {/* Header */}
                <div className={`${plan.bgColor} p-6 text-center border-b-4 border-gray-900`}>
                  <div className="text-6xl mb-3">{plan.emoji}</div>
                  <h3 className="font-black text-3xl text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-800 font-medium">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="p-6 text-center border-b-4 border-gray-900 bg-gray-50">
                  <div className="flex items-center justify-center">
                    <span className="text-6xl font-black text-gray-900">${plan.price}</span>
                    <span className="text-xl font-bold text-gray-600 ml-2">/{plan.duration}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="p-6">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center font-medium text-gray-800">
                        <div className="w-6 h-6 bg-green-400 rounded-full border-2 border-gray-900 flex items-center justify-center mr-3 flex-shrink-0">
                          <Check className="w-4 h-4 text-gray-900 stroke-[3]" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg text-white border-3 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all ${
                      plan.highlighted
                        ? "bg-orange-600 hover:bg-orange-700"
                        : "bg-gray-900 hover:bg-gray-800"
                    }`}
                  >
                    {plan.cta} →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-6">
          <div className="bg-white px-6 py-3 rounded-full border-3 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold">
            🔒 Secure Checkout
          </div>
          <div className="bg-white px-6 py-3 rounded-full border-3 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold">
            ⚡ Instant Access
          </div>
          <div className="bg-white px-6 py-3 rounded-full border-3 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold">
            💯 Money Back Guarantee
          </div>
        </div>

        {/* FAQ teaser */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 font-medium">
            Questions? Check our <a href="#faq" className="text-blue-600 font-bold hover:underline">FAQ</a> or email us at hello@entryexpediter.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;