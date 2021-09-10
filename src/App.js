import "./App.css";
import Nav from "./nav.jsx";
import About from "./about.jsx";
import Skills from "./skills.jsx";
import Projects from "./projects.jsx";
import Academics from "./academics.jsx";
import Contact from "./contact.jsx";
import Intro from "./Intro";

function App() {
  return (
    <div>
      <Nav />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
