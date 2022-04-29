import React from 'react';
import {FaArrowUp} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

import footer from "../Footer/footer.css";

const Footer = () => {
  return (
    <>
    <button className='scroll-up'>Scroll up <FaArrowUp/></button>
    <div className='socials'>
      <a href="https://www.linkedin.com/in/sophia-toukram/"><FaLinkedinIn className='socials-icons'/></a>
      <a href="https://www.instagram.com/iamstram_gram/"><FaInstagram className='socials-icons'/></a>
      <a href="https://github.com/Sophia727"><FaGithub className='socials-icons'/></a>
    </div>
    </>
    
  )
}

export default Footer