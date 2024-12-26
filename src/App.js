import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Technologies from './components/Technologies';
import backgroundImage from './images/black-and-white-web-design-ru.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="App"style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
    }}>
      <Header />
      <About />
      <Experience/>
      <Projects />
      <Technologies/>
      <Contact />
    </div>
  );
}

export default App;
