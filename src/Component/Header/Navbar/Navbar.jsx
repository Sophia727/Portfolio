import React from 'react'

import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineMail} from "react-icons/ai";


import "../../../Pages/ErrorNotFound";
import "../Navbar/navbar.css";

const Navbar = () => {
  return (
    <nav>
        <a href="/#Home"><AiOutlineHome/></a>
        <a href="./#About">About</a>
        <a href="./#Portfolio">Projects</a>
        <a href="/Contact"><AiOutlineMail/></a>
    </nav>
  )
}

export default Navbar