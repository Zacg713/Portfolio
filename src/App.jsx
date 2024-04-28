import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={ <About /> } />
            <Route path="/skills" element={ <Skills /> } />
            <Route path="/projects" element={ <Projects /> } />
            <Route path="/experience" element={ <Experience /> } />
            <Route path="/contact" element={ <Contact />} />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
