import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="scroll-smooth">

      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />

    </div>
  );
};

export default App;