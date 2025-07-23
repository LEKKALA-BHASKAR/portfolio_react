import { FaUser, FaCode, FaBookOpen } from 'react-icons/fa';
import { motion } from 'framer-motion';

function About() {
  const skills = [
    'React.js','MongoDb','Node.js','Express.js','Python', 'JavaScript', 'HTML/CSS',
    'Git', 'SQL', 'Java'
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Me Card */}
          <motion.div 
            variants={item} 
            className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg relative overflow-hidden transition-all duration-300 border border-gray-100/50 group"
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            {/* Radiating background effect */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full bg-rose-300/30 transition-all duration-500 group-hover:w-[150%] group-hover:h-[150%] -translate-x-1/2 -translate-y-1/2" />
            </div>
            
            <div className="flex items-center mb-6 relative z-10">
              <div className="p-4 rounded-full bg-gradient-to-r from-rose-400 to-red-500">
                <FaUser className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold ml-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">About Me</h2>
            </div>
            <p className="text-gray-700 leading-relaxed font-medium relative z-10">
              Full-Stack Developer experienced in building scalable web applications with MERN stack. 
              Strong Python skills with expertise in Data Structures, Algorithms, and problem-solving. 
              Built projects with REST APIs, authentication, and responsive UI. Co-founded a freelance web agency, demonstrating leadership. 
              Proficient in Git, CI/CD, and Agile methodologies. Seeking software development roles to grow my full-stack and backend engineering skills.
            </p>
          </motion.div>

          {/* Skills Card */}
          <motion.div 
            variants={item} 
            className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg relative overflow-hidden transition-all duration-300 border border-gray-100/50 group"
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            {/* Radiating background effect */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full bg-teal-300/30 transition-all duration-500 group-hover:w-[150%] group-hover:h-[150%] -translate-x-1/2 -translate-y-1/2" />
            </div>
            
            <div className="flex items-center mb-6 relative z-10">
              <div className="p-4 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500">
                <FaCode className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold ml-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Skills</h2>
            </div>
            <div className="grid grid-cols-2 gap-3 relative z-10">
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-full text-center text-sm font-medium bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-md hover:shadow-lg transition-all"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div 
            variants={item} 
            className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg relative overflow-hidden transition-all duration-300 border border-gray-100/50 group"
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            {/* Radiating background effect */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full bg-indigo-300/30 transition-all duration-500 group-hover:w-[150%] group-hover:h-[150%] -translate-x-1/2 -translate-y-1/2" />
            </div>
            
            <div className="flex items-center mb-6 relative z-10">
              <div className="p-4 rounded-full bg-gradient-to-r from-indigo-400 to-blue-500">
                <FaBookOpen className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold ml-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Education</h2>
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">B.Tech Computer Science</h3>
              <p className="text-indigo-600 font-medium leading-relaxed">
                Annamacharya Institute Of Technology And Sciences, Tirupati
              </p>
              <p className="text-indigo-500 font-medium">Currently Pursuing</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
