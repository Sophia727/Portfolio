import React from 'react';

import agecalc from "../Media/agecalc.png"
import creasoul from "../Media/creasoul.png";
import fishchips from "../Media/fishchips.png";
import ilayoga from "../Media/ilayoga.png";

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import "../Projects/projects.css";

const Projects = () => {
  return (
    <>
    <div id='Portfolio' className="bg-pro">
    <h2>Projects</h2>
      <div className="container">
      <Carousel id="carousel" variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src={agecalc}
            alt="First slide"/>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={creasoul}
            alt="Second slide"/>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fishchips}
            alt="Third slide"/>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ilayoga}
            alt="First slide"/>
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
    </>
  )
}

export default Projects