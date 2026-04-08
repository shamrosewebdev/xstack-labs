import React from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Developer",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "This AI-powered development platform has revolutionized how we write code. The intelligent suggestions save us hours every day.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Tech Lead",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "The automated testing and debugging features are game-changers. We ship code faster and with more confidence than ever before.",
  },
  {
    name: "Emily Watson",
    role: "CTO",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
    content:
      "Our development velocity increased by 300% since adopting this platform. It's like having a senior developer pair programming with every team member.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
          {/* Left side - Header */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              What our users say about us
            </h2>
            <p className="text-lg text-base lg:text-xl sm:text-lg text-gray-400 max-w-2xl mx-auto">
              Hear from our users how XStack Labs has transformed their
              development workflow and accelerated their projects.
            </p>
          </div>
          {/* Right side - Testimonials */}
          <div className="w-full lg:w-1/2 ">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-800/20 border border-gray-800 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-lg mb-6 sm:mb-8"
              >
                <p className="grow text-lg text-gray-300 italic mb-4">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-blue-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
