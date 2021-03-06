import React from "react";
import "./About.css";
import "../../index.css";
import Headshot from "../../assets/solo_playing4_small.png";

// Function based React Component
const About = (props) => {
  return (
    <div className="About" id="About">
      <h1 className="About_title">
        About<div className="Period">.</div>
      </h1>
      <div className="About_wrapper">
        <div className="About_image">
          {" "}
          <img className="headshot" src={Headshot} />
        </div>
        <p className="About_text">
          Jennifer is native of Maryland and has lived in the DMV since 2010.
          She has been working as a professional violinist, playing for various
          orchestras and ensembles, and as a violin teacher at local Virginia
          and Maryland schools. In June of 2020 (in the peak of COVID season),
          Jennifer attended General Assembly’s Software Engineering 12-week
          Immersive bootcamp where she worked indivudially and collaboratively
          to create apps, webpages and games.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
