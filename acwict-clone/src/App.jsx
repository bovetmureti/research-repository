import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Impact from './components/Impact';
import Partners from './components/Partners';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Impact />
      <Partners />
      <Footer />
    </React.Fragment>
  );
}

export default App;