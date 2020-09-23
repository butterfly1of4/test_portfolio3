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
    <div className="LandingPage" id="Landing_Page">
      <div className="background"
>     <div className='Hi_container' >
  <h1 className="Hi">Jenn <div className="smallHi"> Houck<div className="Period">.</div></div></h1>
        
      <h4 className="Developer_violinist">
        <div className="developer">
  Developer by day<div className="Period">.</div> 
    </div>
  <div className="violinist"> {" "}</div>
  <div className="developer">Violinist by night<div className="Period">.</div></div>
      </h4>
      <hr className="Landing_hr" />
      <p className="About_blurb">
        I’m a Full stack Developer, web developer + recent grad of General
        Assembly in Washington. DC. ...Looking for full time or contract
        opportuines in the DMV or Remotely. {" "}
      </p>
      <img src={arrow_down} className="arrow_down" alt="arrow_down" /> 
      </div>
      </div> 
    </div>
  );
};

export default LandingPage;


    // {/* <section>
    //     <div className="StickyHeader"></div>
    //   </section> */}