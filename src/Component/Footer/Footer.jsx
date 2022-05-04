import React from 'react';

import {FaArrowUp} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

import "../Footer/footer.css";

let mybutton = document.getElementById('myBtn');

const Footer = () => {
   
    window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      mybutton.style.display = "block";
      mybutton.style.textAlign ="center";
    } else {
      mybutton.style.display = "none";
    }
  }
  function topFunction() {
    document.documentElement.scrollTop = 0;
  }


  return (
    <>
    <div className="bg-footer">
    <button className='scroll-up' id='myBtn' onClick={topFunction()}>Scroll up <FaArrowUp/></button>
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