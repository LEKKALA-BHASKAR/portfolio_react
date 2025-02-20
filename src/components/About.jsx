import { FaUser, FaCode, FaBookOpen } from 'react-icons/fa';
import { motion } from 'framer-motion';

function About() {
  const skills = [
    'React', 'Python', 'JavaScript', 'HTML/CSS',
    'Git', 'SQL', 'Java', 'C'
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
    <section id="about" className="py-32 px-6">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Me Card */}
          <motion.div variants={item} className="glass-effect rounded-2xl p-8 card-hover">
            <div className="flex items-center mb-6">
              <div className="p-4 rounded-full bg-[#FF6B6B]/20">
                <FaUser className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-2xl font-bold ml-4 text-black">About Me</h2>
            </div>
            <p className="text-black leading-relaxed">
              <bold>A passionate B.Tech Computer Science student with a keen interest in web development
              and software engineering. Always eager to learn new technologies and solve complex problems.
              </bold>
            </p>
          </motion.div>

          {/* Skills Card */}
          <motion.div variants={item} className="glass-effect rounded-2xl p-8 card-hover">
            <div className="flex items-center mb-6">
              <div className="p-4 rounded-full bg-[#4ECDC4]/20">
                <FaCode className="w-8 h-8 text-[#4ECDC4]" />
              </div>
              <h2 className="text-2xl font-bold ml-4 text-black">Skills</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-badge px-4 py-2 rounded-full text-center text-sm text-black font-medium bg-[#4ECDC4]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div variants={item} className="glass-effect rounded-2xl p-8 card-hover">
            <div className="flex items-center mb-6">
              <div className="p-4 rounded-full bg-[#556270]/20">
                <FaBookOpen className="w-8 h-8 text-[#556270]" />
              </div>
              <h2 className="text-2xl font-bold ml-4 text-black">Education</h2>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-black">B.Tech Computer Science</h3>
              <p className="text-[#FF6B6B] font-medium">Annamacharya Institute Of Technology And Sciences ,Tirupati</p>
              <p className="text-[#FF6B6B] font-medium">Currently Pursuing</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;