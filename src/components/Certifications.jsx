import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

function Certifications() {
  const certifications = [
    {
      title: "React Developer Certification",
      issuer: "Coursera",
      date: "Jan 2024",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800",
      link: "https://example.com/react-cert"
    },
    {
      title: "Python for Data Science",
      issuer: "IBM",
      date: "Mar 2023",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800",
      link: "https://example.com/python-cert"
    },
    {
      title: "Android Development Fundamentals",
      issuer: "Google",
      date: "Jun 2023",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=800",
      link: "https://example.com/android-cert"
    },
    {
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      date: "Dec 2022",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800",
      link: "https://example.com/web-cert"
    }
  ];

  return (
    <section id="certifications" className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <FaAward className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold">Certifications</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <FaAward className="w-6 h-6 text-indigo-500" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-gray-600 mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-sm mb-4">{cert.date}</p>
                <a
                  href={cert.link}
                  className="inline-flex items-center text-indigo-500 hover:text-indigo-400 font-medium transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                  <FaExternalLinkAlt className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;