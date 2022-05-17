import React, { useRef, useState } from 'react';

import {FaArrowUp} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

import "../Footer/footer.css";

const Footer = () => {
const mybutton = useRef();  
const [showButton , setShowButton] = useState(false);

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    // console.log("scroll");
    if ( document.documentElement.scrollTop > 10) { //document.body.scrollTop > 10 ||
      setShowButton(true);
      // console.log(showButton);
   
    } else {
      setShowButton(false);
      // console.log(showButton);
   
    }
  }
  function topFunction() {
    document.documentElement.scrollTop = 10;
  }
//the actual read more section:
/* <ReadMore>
<div>

<\div>
<\ReadMore>
 */

  return (
    <>
    <div className="bg-footer">
    <button className='scroll-up' id='myBtn' style= {showButton == true ? { display: 'block' } : { display: 'none' }} ref={mybutton} onClick={topFunction}>Scroll up <FaArrowUp/></button>
    <div className='socials'>
      <a href="https://www.linkedin.com/in/sophia-toukram/"><FaLinkedinIn className='socials-icons'/></a>
      <a href="https://www.instagram.com/iamstram_gram/"><FaInstagram className='socials-icons'/></a>
      <a href="https://github.com/Sophia727"><FaGithub className='socials-icons'/></a>
    </div>
    </div>
    </>
    
  )
}

export default Footer