import React, { useState, useEffect } from "react";
import { ChevronDown, Sparkles, ArrowRight, Play } from "lucide-react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { CodeExamples, floatingCards } from "../data/CodeExamples";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTab, setCurrentTab] = useState("App.jsx");

  const floatingCardsActive = floatingCards[currentTab];

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      
      {/* Background Effects */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,255,0.15), transparent 40%)`,
        }}
      />
      <div className="absolute left-0 top-0 w-64 h-64 sm:w-72 sm:h-72 blur-3xl rounded-full bg-cyan-500/10" />
      <div className="absolute right-0 bottom-0 w-48 h-48 sm:w-64 sm:h-64 blur-3xl rounded-full bg-teal-300/10" />

      <div className="max-w-7xl mx-auto w-full relative">
        
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center text-center lg:text-left">

          {/* LEFT CONTENT */}
          <div>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-blue-300">
                Introducing XStack Labs
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                Code Smarter,
              </span>
              <span className="block bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Build Faster,
              </span>
              <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                Scale Better.
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mt-4">
              XStack Labs is a next-generation development platform designed
              to accelerate how you write, understand, and scale code. From
              intelligent code suggestions to real-time insights, we bring AI
              directly into your workflow helping developers move faster,
              think clearer, and build better products.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mt-6">
              
              <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg text-sm sm:text-base flex items-center justify-center gap-2 hover:scale-105 transition">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="w-full sm:w-auto px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-white/10 transition">
                <div className="p-2 bg-white/10 rounded-full">
                  <Play className="w-4 h-4 fill-white" />
                </div>
                <span>Watch Demo</span>
              </button>

            </div>
          </div>

          {/* RIGHT CODE BLOCK */}
          <div className="relative w-full">
            
            <div className="bg-white/5 backdrop-blur-xl p-4 rounded-2xl border border-white/10">
              
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-white/5">
                
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-sm text-gray-300">XStack Labs</span>
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </div>

                {/* Tabs */}
                <div className="flex gap-2 p-3 overflow-x-auto">
                  {["App.jsx", "Hero.jsx", "Nav.jsx"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setCurrentTab(tab)}
                      className={`px-3 py-2 text-sm rounded-lg whitespace-nowrap transition ${
                        currentTab === tab
                          ? "bg-blue-500/30 text-white"
                          : "bg-white/5 text-gray-400"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Code */}
                <div className="p-3">
                  <SyntaxHighlighter
                    language="javascript"
                    style={nightOwl}
                    customStyle={{
                      margin: 0,
                      borderRadius: "8px",
                      fontSize: "12px",
                    }}
                  >
                    {CodeExamples[currentTab]}
                  </SyntaxHighlighter>
                </div>

              </div>
            </div>

            {/* Floating Card */}
            <div className="hidden lg:block absolute bottom-4 right-4 w-72 p-4 rounded-lg border border-white/20 backdrop-blur bg-white/5 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 flex items-center justify-center text-sm font-bold">
                  {floatingCardsActive.icon}
                </div>
                <span className="text-sm font-medium">
                  {floatingCardsActive.title}
                </span>
              </div>
              <p className="text-sm text-gray-300">
                {floatingCardsActive.content}
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;