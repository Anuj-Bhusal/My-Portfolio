import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Resume from './Resume/Resume';
import Blog from './Blog/Blog';
import Navbar from './Navbar';
import Anuj from './Anuj/Anuj';
import Footer from './Footer/Footer';
import ScrollToTop from './ScrollToTop';

const Myroutes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop /> 
      <Navbar /> {/* Navbar will be displayed on all pages */}
      <Routes>
        <Route path="/" element={<Anuj />} /> {/* Home page */}
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> {/* Footer will be displayed on all pages */}
    </Router>
  );
};

export default Myroutes;
