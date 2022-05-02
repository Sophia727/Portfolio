import React from 'react';
import {FaBrain} from "react-icons/fa";
import {FaHandSparkles} from "react-icons/fa";
import {FaHandHoldingHeart} from "react-icons/fa";
import {FaRegSmileBeam} from "react-icons/fa";

import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';

import "../About/about.css";

const About = () => {
  return (
    <>
      <div id='About' className='about'>
        <h2>About</h2>
        
          {/* RESPONSIVE */}
          <div className="cards">
            <div className='circle'>
              <FaBrain className='circle-icon'/> 
            </div>
            
            <div className="card-body">
              <h3>Responsive</h3>
              <p className="card-text">Your website can be used from different devices.</p>
            </div>
          </div>


          {/* CREATIVE */}
          <div className="cards">
            <div className='circle'>
              <FaHandSparkles className='circle-icon'/> 
            </div>
            <div className="card-body">
              <h3>Creative</h3>
              <p className="card-text">Every project has an identity that makes it unique.</p>
            </div>
          </div>


          {/* DYNAMIC */}
          <div className="cards">
            <div className='circle'>
              <FaHandHoldingHeart className='circle-icon'/> 
            </div>
            <div className="card-body">
              <h3>Dynamic</h3>
              <p className="card-text">Content is adapted to render a living experience.</p>
            </div>
          </div>
            <hr />
          {/* ABOUT ME */}
          <div className="cards-square">
            <div className='square'>
            <FaRegSmileBeam className='circle-icon'/>           
            </div>
            
            <div className="card-body">
              <h3>Who am I?</h3>
              <p className="card-text">I'm a front end developper from Casablanca, Morocco. <br/> I am passionate about creating unique content, letting the website impersonalize its owner,<br/> help transmit the idea and the feeling into visual identity and content. </p>
            </div>
          </div>
          {/* ********SKILLS************ */}
          <div className="bg">
          <div className="container">
            <div className="skills">
              <div className="sk">
                <h3>Skills</h3>
                <ProgressBar className='skill' variant="danger" now={70} label={`CSS`} />
                <ProgressBar className='skill' variant="success" now={80} label={`HTML`} />
                <ProgressBar className='skill' variant="info" now={65} label={`REACT JS`} />
                <ProgressBar className='skill' variant="secondary" now={60} label={`JAVASCRIPT`} />
                <ProgressBar className='skill' variant="warning" now={80} label={`BOOTSTRAP`} />
                <ProgressBar className='skill' variant="success" now={70} label={`GOOGLE ADS`} />

              </div>
              
              <div className="sk">
                <h4>Languages</h4>
                <ProgressBar className='skill' variant="info" now={80} label={`English`} />
                <ProgressBar className='skill' variant="warning" now={90} label={`French`} />
              </div>
            </div>
          </div>
          <div className="aboutbutton">
            <button><a>Download my CV</a></button>
          </div>
          </div>
      </div>

      
      
      
    
    </>
  )
}

export default About