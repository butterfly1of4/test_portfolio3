import React from 'react';
import "./About.css";
import "../../index.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

// Function based React Component
const About = (props) => {


  return(
    <div className="About" id="About">
     <h1 className="About_title">About<div className="Period">.</div></h1> 
     <div className="About_wrapper">
     <div className="About_image"></div>
      <p className="About_text">Jennifer is native of Maryland and has lived in the DMV since 2010 working as a professional violinist for various state run orchestras and as a teacher at local Virginia and Maryland schools. In June of 2020 (in the peak of COVID season) Jennifer attended General Assembly’s Software Engineering 12 week Immersive bootcamp where she worked indivudially and collaboratively to create apps, webpages and games. </p>
     </div>
    </div>
  );
}

export default About;