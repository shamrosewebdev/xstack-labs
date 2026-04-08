import React from "react";
import { Star, Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$19.99",
    description: "Best for individuals starting out or small teams.",
    features: [
      "5 projects",
      "Basic collaboration tools",
      "Limited analytics",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$49.99",
    description: "Best for growing teams and businesses.",
    features: [
      "20 projects",
      "Advanced collaboration tools",
      "Detailed analytics",
      "Priority email support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99.99",
    description: "Best for large organizations with custom needs.",
    features: [
      "Unlimited projects",
      "Custom collaboration tools",
      "Comprehensive analytics",
      "Dedicated support",
    ],
    popular: false,
  },
];
const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Choose the Perfect Plan
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              For Your Development Journey
            </span>
          </h2>
          <p className="text-lg text-base lg:text-xl sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Select the plan that best fits your needs and start building amazing
            applications today.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8  lg:gap-6">
          {plans.map((plan, key) => (
            <div
              key={key}
              className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 group flex flex-col h-full ${plan.popular ? "border-blue-500 shadow-2xl shadow-blue-500/20 lg:scale-105" : " border-slate-800 hover:border-slate-700 "} `}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none rounded-lg" />
              {plan.popular && (
                <div className=" absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="flex items-center space-x-1 px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-white" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm-mb-4">
                  {plan.description}
                </p>
                <div className="flex justify-center items-baseline">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-2 sm:ml-3 text-sm sm:text-base">
                    /month
                  </span>
                </div>
              </div>
              <ul className="flex flex-col space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-start space-x-2 sm:space-x-3"
                  >
                    <div className="bg-blue-500/20 h-4 w-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center">
                      <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-blue-400" />
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 ${plan.popular ? "bg-gradient-to-b from-blue-600 to-blue-400" : "bg-white/5 border border-white/10 hover: bg-white/10"} rounded-lg semi-bold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center gap-x-2`}
              >
                <span>Get Started</span>
              </button>
            </div>
          ))}
        </div>
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl">
            Need a custom solution?{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Contact out sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
