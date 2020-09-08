import React from "react";
import "./LandingPage.css";
import arrow_down from "../../assets/arrow_down.png";
import background from "../../assets/background.png";
import "../../index.css"
// Function based React Component
const LandingPage = (props) => {
  // Default Class to apply to Component
  // let classList = `LandingPage`;

  return (
    <div className="LandingPage">
      <div className='Hi_container'>
        <span>
      <h1 className="Hi">Hi<div className="Period">.</div> I'm Jenn<div className="Period">.</div> </h1></span>
      <h4 className="Developer_violinist">
        Developer by day. Violinist by night.
      </h4>
      <br className="Landing_br" />
      <p className="About_blurb">
        I’m a Full stack Developer, web developer + recent grad of General
        Assembly in Washington. DC. ...Looking for full time or contract
        opportuines in the DMV or Remote for<br /> If your a business seeking a web
        presence or an employwer looking to hire, contact me here. rich
        interactive web apps.{" "}
      </p>
      <img src={arrow_down} className="arrow_down" alt="arrow_down" /> 
      </div>
  
    </div>
  );
};

export default LandingPage;


    // {/* <section>
    //     <div className="StickyHeader"></div>
    //   </section> */}