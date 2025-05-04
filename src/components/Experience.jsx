import React from "react";

const experiences = [
  {
    title: "iNeuron Intelligence Pvt Ltd",
    role: "Internship – QuizApp Development",
    description: "Contributed to a QuizApp using HTML, CSS, JavaScript, and TypeScript. Implemented interactive features and dynamic quiz functionalities.",
    link: "https://github.com/LEKKALA-BHASKAR/Quiz-App",
  },
  {
    title: "Innovate Intern!",
    role: "Python Programming and Development Intern",
    description: "Designed and developed efficient Python-based solutions to address real-world challenges, optimizing performance and scalability.",
  },
  {
    title: "IISPPR",
    role: "Front-End Developer Intern",
    description: "Crafted responsive landing, profile, and FAQ pages using React and Tailwind CSS. Leveraged Git/GitHub for seamless version control.",
    link: "https://github.com/codebyviral/iisppr-intern-management",
  },
  {
    title: "Weborium",
    role: "Co-Founder & Front-End Developer Team Lead",
    description: "Led the frontend team, collaborated with clients, and delivered visually stunning, high-quality websites for small businesses.",
    link: "https://weborium.vercel.app/",
  },
];

const achievements = [
  "1st Place – Java Programming Competition (College Level)",
  "2nd Place – Data Analysis Using Python (College Level)",
  "Runner-Up – Blind Code Event (Team Lead, College Level)",
];

const Experience = () => {
  return (
    <section className="py-16 px-7 sm:px-6 max-w-6xl mx-auto bg-black-to-b from-gray-900 to-gray-800">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Experience & Achievements
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
      </div>

      {/* Experience Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-8 rounded-xl bg-gray-800 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <div className="flex items-start mb-4">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">{exp.title}</h2>
                <p className="text-sm text-cyan-300 font-medium">{exp.role}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 pl-14">{exp.description}</p>
            {exp.link && (
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200 pl-14"
              >
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Achievements Section */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline-block mr-2 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Achievements
        </h2>
        <ul className="space-y-4">
          {achievements.map((item, idx) => (
            <li 
              key={idx} 
              className="flex items-start text-gray-200 text-lg pl-2"
            >
              <span className="bg-cyan-500 rounded-full p-1 mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;