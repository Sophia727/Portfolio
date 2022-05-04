import React from 'react';

import Welcome from "../Component/Header/Welcome";
import Navbar from "../Component/Header/Navbar/Navbar";
import About from "../Component/About/About";
import Projects from "../Component//Projects/Projects";
import Footer from "../Component/Footer/Footer";


const Home = () => {
  return (
    <div>
       <Welcome/>
        <Navbar/>
        <About/>
        <Projects/> 
        <Footer/>
    </div>
  )
}

export default Home