import React, { useRef, useState } from 'react';

//icons
import {FaBrain} from "react-icons/fa";
import {FaHandSparkles} from "react-icons/fa";
import {FaHandHoldingHeart} from "react-icons/fa";
import {FaRegSmileBeam} from "react-icons/fa";


//css bootstrap and others
import ProgressBar from 'react-bootstrap/ProgressBar';
//import Timeline from "../Timeline/Timeline";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../About/about.css";

const About = () => {
  // const showMoreBtn = useRef();
  // const [showMore, setShowMore] = useState(false);
  // const { text } = DocumentTimeline;
  // const DocumentTimeline = Timeline;
  
  return (
    <>
      <div  className='about'>
        <h2 id='About'>About</h2>
        
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
              <p className="card-text">I'm a Full-Stack developper living in Casablanca, Morocco. <br/> I am passionate about creating unique content, letting the website impersonalize its owner,<br/> help transmit the idea and the feeling into visual identity and content. </p>
              {/* {showMore ? text : Timeline} */}
              {/* <button className='showMore-btn' onClick={() => setShowMore(!showMore)} > {showMore ? "show less" : "Show more"} </button> ref={showMoreBtn} */}
            </div>
          </div>
          {/* ********SKILLS************ */}
          <div className="bg">
          <div className="skills">
              <h3>Skills + Languages</h3>
              <div className="container">
                <div className="row">

                  <div className="col">
                    <div className="row">
                      <div className="col-sm-2">
                        <label>CSS/HTML </label>
                        <label>React JS</label>
                        <label>Javascript</label>
                        <label>Bootstrap</label>
                        <label>Google Ads</label>
                    
                      </div>
                      <div className="col-sm-9">
                        <ProgressBar className='skill' variant="info" now={85} />
                        <ProgressBar className='skill' variant="info" now={65} />
                        <ProgressBar className='skill' variant="info" now={60} />
                        <ProgressBar className='skill' variant= "info" now={90} />
                        <ProgressBar className='skill' variant="info" now={75} />
                      </div>
                      <div className="col-sm-1">
                        <span></span>
                      </div>
                    </div>
                  
                  </div>


                  <div className="col">
                    <div className="row">
                      <div className="col-sm-2">
                      <label>English</label>
                      <label>French</label>
                      <label>Spanish</label>
                      <label>Moroccan</label>
                      <label>Russian</label>
                      </div>

                      <div className="col-sm-9">
                        <ProgressBar className='skill' variant="info" now={85} />
                        <ProgressBar className='skill' variant="info" now={95} />
                        <ProgressBar className='skill' variant="info" now={70} />
                        <ProgressBar className='skill' variant="info" now={90} />
                        <ProgressBar className='skill' variant="info" now={90} />
                      </div>
                      <div className="col-sm-1">
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>

              </div> {/* end of container*/}

          </div>
          <div className="downloadbutton">
            <button><a href='portfolio/src/Component/Media/Profile.pdf' download>Download my CV</a></button>
          </div>
          </div>
      </div>

    </>
  )
}

export default About