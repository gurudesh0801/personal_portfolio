import "./App.css";
import About from "./Components/About/About";
import Achievements from "./Components/Achievement/Achievement";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Services />
      <Skills />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
