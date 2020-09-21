import React, { Component } from "react";
import "./Contact.css";
import "../../index.css";
import CurrentResume from "../../CurrentResume.pdf";
import { BrowserRouter as Router, Link } from "react-router-dom";

// React Class Component
class Contact extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="Contact">
        <div className="yellow_box">
          <div className="text_wrapper">
            <h1 className="Contact_title" id="Contact">
              Contact<div className="Period">.</div>
            </h1>
            <div className="Content_wrapper">
              <p className="Contact_text">
                <span className="bold_text">Want to collaborate Looking for a dev with mad
                skills?</span> <br />
                <span className="other_text">I’m always open to discussing new projects or partnerships.</span>
              </p>
            </div>
          </div>
          <div className="button">
            <div className="button_link">
            <a
              className="Resume_link"
              style={{ textDecoration: "none" }}
              href={CurrentResume}
              target="_blank"
            >
              <button className="Resume_button">VIEW RESUME</button>
            </a>
            </div>
            <div className="button_link">
            <a
              className="Contact_link"
              style={{ textDecoration: "none" }}
              href="mailto:jhouck29@gmail.com"
              target="_blank"
            >
              <button className="Contact_button">CONTACT ME</button>
            </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

{
  /* <div className="Button_resume_button">
<div className="ButtonLink_wrapper">
  
    <a className="Resume_button"
      style={{ textDecoration: "none" }}
      href={CurrentResume} target="_blank"
    >
      VIEW RESUME
    </a>

</div>
</div>
<div className="Button_contactlink_button">
<div className="ContactLink_wrapper">


  <a className="Contact_button" style={{ textDecoration: "none" }}href="mailto:jhouck29@gmail.com" target="_blank">
  CONTACT ME</a>
</div>
</div> */
}
