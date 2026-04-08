import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const features = [
  {
    title: "Smart Code Completion",
    description:
      "Write code faster with AI-powered suggestions that understand your context and intent not just syntax. Get relevant code snippets, function signatures, and even entire code blocks as you type.",
    codeSnippet: `
// Ai-powered code completion
const [value, setValue] = useState("");
<input onChange={(e) => setValue(e.target.value)} />
    `,
    imagePosition: "left",
  },
  {
    title: "Automated Testing",
    description:
      "Automated testing is a software testing technique that uses automated tools and scripts to execute tests on software applications. It helps to improve the efficiency and effectiveness of the testing process by reducing manual effort and increasing test coverage.",
    codeSnippet: `
// Ai-powered automated testing
import { generateTests } from "xstack-labs/testing";
const tests = generateTests(yourCode);
    `,
    imagePosition: "right",
  },
  {
    title: "Smart Debugging",
    description:
      "Identify and fix issues faster with AI-powered debugging that analyzes your code and provides actionable insights. No more guesswork, just clear solutions.",
    codeSnippet: `
// Ai-powered debugging
import { debug } from "xstack-labs/debugging";
debug(yourCode);
    `,
    imagePosition: "left",
  },
];

const Features = () => {
  return (
    <div>
      <section
        id="features"
        className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
                Your Complete Development
              </span>
              <br />
              <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Workflow
              </span>
            </h2>
          </div>

          <div className="space-y-16 sm:space-y-20 lg:space-y-32 ">
            {features.map((feature, key) => (
              <div
                key={key}
                className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""}`}
              >
                {/* code section
                 */}
                <div className="flex-1 w-full">
                  <div className="relative group">
                    <div className="relative bg-white/5 hover:bg-blue-500/10 backdrop-blur-xl p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10 hover:border-blue-700/10 transition-all duration-300">
                      {/* IDE Interface */}
                      <div className="bg-gray-950 rounded-lg p-3 sm:p-4 font-mono text-xs sm: text-sm">
                        <div className="flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4">
                          <div className="flex space-x-1 sm:space-x-2">
                            <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-500" />
                            <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-yellow-500" />
                            <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-500" />
                          </div>
                          <span className="text-gray-400 ml-2 sm:ml-4 text-xs sm:text-sm">
                            {feature.title}
                          </span>
                        </div>
                        <div>
                          {/* Code Snippet */}
                          <SyntaxHighlighter
                            language="javascript"
                            className="relative flex-grow overflow-hidden text-xs sm:text-sm"
                            style={nightOwl}
                            customStyle={{
                              margin: 0,
                              borderRadius: "8px",
                              lineHeight: "1.5",
                              fontSize: "0.75rem",
                              height: "100%",
                              whiteSpace: "pre-wrap",
                              wordBreak: "break-word",
                              backgroundColor: "transparent",
                            }}
                            wrapLines={true}
                          >
                            {feature.codeSnippet}
                          </SyntaxHighlighter>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                    <h3 className="text-4xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 font-bold">{feature.title}</h3>
                    <p className="text-gray-300 text-base text-xl sm:text-lg leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
