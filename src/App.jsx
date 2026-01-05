import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      {/* Full background wrapper */}
      <div className="bg-gray-950 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <Navbar />
          <Hero />
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </div>

      <ScrollToTop />
    </>
  );
}

export default App;
