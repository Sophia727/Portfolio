import React from 'react';
import {FaArrowDown} from "react-icons/fa";
import "../Media/backgroundcells.jpg";
import "./welcome.css";
// import arrow-alt-circle-down from "svgs/regular/arrow-alt-circle-down.svg";


const Welcome = () => {
  return (
    <header>
      <div id="Home" className="bg-header" style={{ backgroundImage: "url(portfolio/src/Component/Media/backgroundcells.jpg)" }}>
        <div className='container header-container'>
          <h1>Hello, I'm <span>Sophia Toukram!</span><br/>
          I'm a full-stack web developer.</h1>
          <button><a href='#About'>Learn more <FaArrowDown className='FaArrowDown'/></a></button>  
        </div>
      </div>
    </header>
    
    
  )
}

export default Welcome