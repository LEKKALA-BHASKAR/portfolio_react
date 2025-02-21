import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Certifications() {
  const certifications = [
    {
      title: "iNeuron Internship",
      issuer: "iNeuron Intelligence Pvt Ltd",
      date: "2024",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      link: "https://www.linkedin.com/posts/lekkala-bhaskar_ineuron-intelligence-pvt-ltd-internship-activity-7258459600721440769-ck3j",
      color: "indigo"
    },
    {
      title: "React development",
      issuer: "Tech Grow",
      date: "2024",
      image:"/img/react.webp",
      link: "https://drive.google.com/file/d/1fJ5psxsh49IFi_7gWVH8mev0unt1-p2n/view?usp=drive_link",
      color: "indigo"
    },
    {
      title: "Android App Development",
      issuer: "Android Studio",
      date: "2023",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800&q=80",
      link: "https://drive.google.com/file/d/1bXtkUI6ZwK7911EoWUd0xtx69x_SLoot/view",
      color: "indigo"
    },
    {
      title: "Java Programming",
      issuer: "HackerRank",
      date: "2023",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      link: "https://www.hackerrank.com/certificates/iframe/d8f03edc02ae",
      color: "indigo"
    },
    {
      title: "Python Problem Solving",
      issuer: "HackerRank",
      date: "2023",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
      link: "https://www.hackerrank.com/certificates/iframe/67f76da0c4f6",
      color: "indigo"
    },
    {
      title: "Analyzing Data with Python",
      issuer: "edX",
      date: "2023",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      link: "https://courses.edx.org/certificates/d6dc43c7eda0481696788f0ef711e5f3",
      color: "indigo"
    },
    {
      title: "C++ Programming",
      issuer: "edX",
      date: "2023",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      link: "https://courses.edx.org/certificates/e56cf3a1b85c46e085c1a73de1b1a0b5",
      color: "indigo"
    },
    {
      title: "SOFTWARE ENGINEER",
      issuer: "HACKER RANK",
      date: "2024",
      image: "img/SE.avif",
      link: "https://www.hackerrank.com/certificates/e976910fa4cf",
      color: "indigo"
    }
  ];

  return (
    <section id="certifications" className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <FaAward className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Certifications
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-lg rounded-lg shadow-lg relative overflow-hidden transition-all duration-300 border border-gray-100/50 group"
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              {/* Radiating background effect */}
              <div className="absolute inset-0 -z-10">
                <div className={`absolute top-1/2 left-1/2 w-0 h-0 rounded-full bg-${cert.color}-300/30 transition-all duration-500 group-hover:w-[150%] group-hover:h-[150%] -translate-x-1/2 -translate-y-1/2`} />
              </div>

              <div className="relative z-10">
                <div className="relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <FaAward className={`w-6 h-6 text-${cert.color}-500`} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{cert.title}</h3>
                  <p className="text-gray-600 mb-1">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm mb-4">{cert.date}</p>
                  <a
                    href={cert.link}
                    className={`inline-flex items-center text-${cert.color}-500 hover:text-${cert.color}-400 font-medium transition-colors`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                    <FaExternalLinkAlt className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;