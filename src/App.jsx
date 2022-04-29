import React from 'react';
import Header from "./Component/Header/Welcome";
import Navbar from './Component/Header/Navbar/Navbar';
import About from "./Component/About/About";
import Testimonials from "./Component/Testimonials/Testimonials";
import Projects from "./Component/Projects/Projects";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";

// import Form from 'react-bootstrap/Form'

function App() {
  return (
    <>
        <Header/>
        <Navbar/>
        <About/>
        <Testimonials/>
        {/* projects is portfolio */}
        <Projects/> 
        <Contact/>
        <Footer/>
    </>
  )
}

export default App