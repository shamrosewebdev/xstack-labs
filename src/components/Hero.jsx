import React, { use } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ChevronDown, Sparkles, ArrowRight, Play } from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { codeExamples } from "../data/codeExamples";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { floatingCards } from "../data/codeExamples";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTab, setCurrentTab] = useState("App.jsx");
  const floatingCardsActive = floatingCards[currentTab];

  function handleMouseMove(event) {
    setMousePosition({ x: event.clientX, y: event.clientY });
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8">
      <div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px,rgba(59,130,255,0.15),transparent 40%)`,
          }}
        ></div>
        <div className="absolute left-0 top-0 w-64 h-64 sm:w-72 sm:h-72 lg:w-100 lg:h-100 blur-3xl rounded-full bg-cyan-500/10" />
        <div className="absolute right-0 bottom-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 blur-3xl rounded-full bg-teal-300/10" />

        <div className="max-w-7xl mx-auto text-center relative w-full">
          <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 text-center lg:text-left gap-6 sm:gap-8 lg:gap-12 items-center position relative">
            {/* Content */}

            <div>
              <div className=" inline-flex items-center gap-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700">
                <Sparkles className="w-4 h-4 text-cyan-400 mb-2 mx-auto" />
                <span className="text-xs sm:text-sm text-blue-300">
                  Introducing XStack Labs
                </span>
              </div>

              <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-1 sm:mb-2 block">
                  Code Smarter,
                </span>
                <span className="bg-gradient-to-b from-blue-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1 sm:mb-2 block">
                  Build Faster,
                </span>
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-1 sm:mb-2 block">
                  Scale Better.
                </span>
              </h1>
              <p
                className="text-s md:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200"
                leading-relaxed
              >
                XStack Labs is a next-generation development platform designed
                to accelerate how you write, understand, and scale code. From
                intelligent code suggestions to real-time insights, we bring AI
                directly into your workflow helping developers move faster,
                think clearer, and build better products.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300">
                <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg semi-bold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center gap-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 rounded-lg semi-bold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center gap-x-2">
                  <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 duration-300 transition-colors ">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                  </div>
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
            <div className="relative order-2 w-full">
              <div className="relative bg-white/5 backdrop-blur-xl p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10">
                <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[350px] lg:h-[450px] border-white/5">
                  {/* IDE Header */}
                  <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border-b border-white/10">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1 sm:space-x-2">
                        <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-500" />
                        <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-yellow-500" />
                        <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-500" />
                      </div>
                      <span className="text-xs text-gray-300 sm:text-sm">
                        XStack Labs
                      </span>
                    </div>
                    <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div className="p-3 sm:p-4">
                    {/* IDE Tabs */}
                    <div className="flex items-center space-x-1 overflow-x-auto">
                      <button
                        onClick={() => setCurrentTab("App.jsx")}
                        className={`px-3 py-2 text-xs sm:text-sm border ${currentTab === "App.jsx" ? "bg-blue-400/30 text-white border-blue-500/20 hover:bg-blue-500/50" : "bg-white/5 border-white/50"}  backdrop-blur-sm rounded-t-lg sm:rounded-t-xl transition-all duration-200 whitespace-nowrap`}
                      >
                        App.jsx
                      </button>
                      <button
                        onClick={() => setCurrentTab("Hero.jsx")}
                        className={`px-3 py-2 text-xs sm:text-sm border ${currentTab === "Hero.jsx" ? "bg-blue-400/30 text-white border-blue-500/20 hover:bg-blue-500/50" : "bg-white/5 border-white/50"}  backdrop-blur-sm rounded-t-lg sm:rounded-t-xl transition-all duration-200 whitespace-nowrap`}
                      >
                        Hero.jsx
                      </button>
                      <button
                        onClick={() => setCurrentTab("Nav.jsx")}
                        className={`px-3 py-2 text-xs sm:text-sm border ${currentTab === "Nav.jsx" ? "bg-blue-400/30 text-white border-blue-500/20 hover:bg-blue-500/50" : "bg-white/5 border-white/50"}  backdrop-blur-sm rounded-t-lg sm:rounded-t-xl transition-all duration-200 whitespace-nowrap`}
                      >
                        Nav.jsx
                      </button>
                    </div>
                  </div>
                  <div className="px-2 sm:px-3">
                    <SyntaxHighlighter
                      language="javascript"
                      className="relative flex-grow overflow-hidden text-xs sm:text-sm"
                      style={nightOwl}
                      customStyle={{
                        margin: 0,
                        borderRadius: "8px",
                        lineHeight: "1.5",
                        fontSize: "11px",
                        border: "1px solid#3c3c3c",
                        height: "100%",
                      }}
                    >
                      {codeExamples[currentTab]}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              {/* Floating Cards  */}
              <div
                className={`hidden lg:block absolute bottom-4 right-4 translate-x-8 translate-y-8 w-72 ${floatingCardsActive.bgColor} p-4 rounded-lg border backdrop-blur-xs border-white/20 shadow-2xl`}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div
                    className={`${floatingCardsActive.iconColor} w-6 h-6 flex item-center justify-center text-sm font-bold`}
                  >
                    {floatingCardsActive.icon}
                  </div>
                  <span
                    className={`font-medium text-sm ${floatingCardsActive.textColor}`}
                  >
                    {floatingCardsActive.title}
                  </span>
                </div>
                <div
                  className={`text-left text-sm ${floatingCardsActive.textColor}`}
                >
                  {floatingCardsActive.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
