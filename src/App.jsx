import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Experience from './components/Experience';
import GitHubStats from './components/GitHubStats';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Header />
      <About />
      <Certifications /> 
      <Experience/>
      <GitHubStats />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;