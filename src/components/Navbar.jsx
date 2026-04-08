import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/200 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div>
              <img
                src="src/assets/LogoDark.png"
                alt="Xstack Logo"
                className="w-10 h-10 sm:w-15 sm:h-15"
              />
            </div>
            <span className="text-lg sm:text-xl ms:text-2xl font-medium">
              <span className="text-white ">LABS</span>
            </span>
          </div>

          {/* Navigation Links */}

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#features"
              className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200"
            >
              Features
            </a>

            <a
              href="#pricing"
              className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200"
            >
              Pricing
            </a>

            <a
              href="#testimonials"
              className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200"
            >
              Testimonials
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 p-2 hover:text-white items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}

      {isMobileMenuOpen && (
        <div className="flex md:hidden items-center space-x-6 lg:space-x-8 bg-slate-900/95 backdrop-blur-large border-t border-slate-700 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
            <a
              href="#features"
              className="block text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>

            <a
              href="#pricing"
              className="block text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>

            <a
              href="#testimonials"
              className="block text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
