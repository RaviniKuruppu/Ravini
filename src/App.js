import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Technologies from './components/Technologies';

function App() {
  return (
    <div className="App">
      <Header />
      <Experience/>
      <About />
      <Projects />
      <Technologies/>
      <Contact />
    </div>
  );
}

export default App;
