import { SocialIcon } from "react-social-icons";

const footerLinks = {
  Product: ["Features", "Pricing", "Security", "Roadmap", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: [
    "Documentation",
    "Help Center",
    "Community",
    "API Reference",
    "Status",
  ],
  Legal: ["Privacy", "Terms", "Cookie Policy", "Licenses", "Compliance"],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* Main footer */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          
          {/* Left section */}
          <div className="col-span-1 sm:col-span-3 lg:col-span-2 text-center sm:text-left">
            
            {/* Name (logo removed) */}
            <span className="text-lg sm:text-xl font-bold">
              <span className="text-white">XStack</span>
              <span className="text-blue-400"> Labs</span>
            </span>

            <p className="text-gray-400 mb-4 sm:mb-6 max-w-xs mx-auto sm:mx-0 text-sm sm:text-base mt-4">
              Transform your workflow with AI-powered tools and automation.
              Built for modern teams.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start gap-3 sm:gap-4">
              
              {/* GitHub */}
              <SocialIcon
                url="https://github.com/shamrosewebdev"
                target="_blank"
                bgColor="transparent"
                fgColor="#9CA3AF"
                className="!w-10 !h-10 rounded-lg bg-slate-800 border border-white/10 hover:bg-white/10 transition-all duration-300"
              />

              {/* LinkedIn */}
              <SocialIcon
                url="https://www.linkedin.com/in/shamrosekhan/"
                target="_blank"
                bgColor="transparent"
                fgColor="#9CA3AF"
                className="!w-10 !h-10 rounded-lg bg-slate-800 border border-white/10 hover:bg-blue-500/20 transition-all duration-300"
              />

              {/* Email */}
              <SocialIcon
                url="mailto:shamrose.khan87@outlook.com"
                bgColor="transparent"
                fgColor="#9CA3AF"
                className="!w-10 !h-10 rounded-lg bg-slate-800 border border-white/10 hover:bg-cyan-500/20 transition-all duration-300"
              />

            </div>
          </div>

          {/* Footer links */}
          <div className="sm:col-span-3 lg:col-span-4">
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">
                    {category}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-6 sm:pt-8 border-t-0 sm:border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2025 XStack Labs. All rights reserved.
            </p>

            <p className="text-gray-400 text-xs sm:text-sm">
              Designed & Developed by{" "}
              <span className="text-blue-400 font-medium">
                Shamrose Khan
              </span>
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}