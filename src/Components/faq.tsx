import React from "react";

export const Faq = () => {
  const FaqItems = [
    {
      id: 1,
      question: "What services does BasicTech offer?",
      answer: "BasicTech offers a comprehensive range of digital services including web development, mobile app development, UI/UX design, digital marketing, and IT consulting. We specialize in creating custom solutions tailored to your business needs."
    },
    {
      id: 2,
      question: "How long does it typically take to complete a project?",
      answer: "Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      id: 3,
      question: "What is your development process?",
      answer: "Our development process follows an agile methodology with five key phases: Discovery, Planning, Development, Testing, and Deployment. We maintain continuous communication and provide regular updates throughout the project lifecycle."
    },
    {
      id: 4,
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive post-launch support and maintenance packages. This includes regular updates, security patches, performance monitoring, and technical support to ensure your digital solution continues to perform optimally."
    },
    {
      id: 5,
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern web technologies including React, Node.js, TypeScript, Next.js, and various cloud platforms. Our tech stack is constantly evolving to incorporate the latest and most efficient solutions for our clients."
    }
];
  return (
<div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Frequently Asked Questions
      </h2>

      <div className="bg-gray-50 rounded-lg overflow-hidden mb-10">
        {FaqItems.map((item) => (
          <details
            key={item.id}
            className="group border border-gray-200 rounded-lg mb-2 transition-all duration-300 ease-in-out hover:bg-gray-50"
          >
            <summary className="flex items-center justify-between cursor-pointer p-4 bg-gradient-to-r from-green-50 to-yellow-100 transition-all duration-300 ease-in-out hover:from-green-100 hover:to-yellow-200">
              <span className="text-sm font-medium text-green-800 transition-colors duration-300 group-hover:text-green-900">
                {item.question}
              </span>
              <span className="text-green-600 transform transition-transform duration-300 ease-in-out group-open:rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </summary>
            <div className="p-4 bg-white/80 shadow-lg transition-all duration-300 ease-in-out">
              <p className="text-sm text-gray-600 transform transition-opacity duration-300 opacity-100">
                {item.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};
