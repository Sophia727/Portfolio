import React from 'react'

import Welcome from "../Component/Header/Welcome"
import Navbar from '../Component/Header/Navbar/Navbar';
import Footer from "../Component/Footer/Footer"
import ContactMe from '../Component/Contact/ContactMe';

// import "../Component/Contact/contactMe.css"

const Contact = () => {
  return (
    <div className='Contact'>
      <Navbar/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default Contact