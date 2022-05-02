import React from 'react';
import Header from "./Component/Header/Welcome";
import Navbar from './Component/Header/Navbar/Navbar';
import About from "./Component/About/About";
import Projects from "./Component/Projects/Projects";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";


function App() {
  return (
    <>
        <Header/>
        <Navbar/>
        <About/>
        <Projects/> 
        <Contact/>
        <Footer/>
    </>
  )
}

export default App