import React from 'react';
import Sidebar from './components/Sidebar';
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
      <Sidebar />
      <div className="main-content">
      <Navbar />
        <Hero />
        <About />
        <Programs />
        <Impact />
        <Partners />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;