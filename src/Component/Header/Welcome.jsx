import React from 'react';
import {FaArrowDown} from "react-icons/fa";
import welcome from "./welcome.css"
// import arrow-alt-circle-down from "svgs/regular/arrow-alt-circle-down.svg";


const Welcome = () => {
  return (
    <header>
      <div className="bg-header">
        <div className='container header-container'>
          <h1>Hello, I'm <span>Sophia Toukram!</span><br/>
          I'm a full-stack web developer.</h1>
          <button><a href='#About'>View my work <FaArrowDown className='FaArrowDown'/></a></button>  
        </div>
      </div>
    </header>
    
    
  )
}

export default Welcome