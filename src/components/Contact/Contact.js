import React, { Component } from "react";
import "./Contact.css";
import "../../index.css";
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
          <h1 className="Contact_title">Contact<div className="Period">.</div></h1>
          <div className="Content_button_wrapper">
            <p className="Contact_text">
              <bold>Want to collaborate? </bold> Looking for a dev with mad
              skills? <br />
              I’m always open to discussing new projects or partnerships.
            </p>
            <div className="Button_resume_buttons">
              <div className="ButtonLink_wrapper">
                <button className="Resume_button"><a className="Resume_link" style={{textDecoration:'none'}} ref="https://docs.google.com/document/d/1Y76f5XKECmG6bzd_AMMGS6MhCS7aG_f44R0sQO2azz8/export?format=pdf" download>VIEW RESUME</a></button>
              </div>
              <div className="ContactLink_wrapper">
                <button className="Contact_button">CONTACT ME</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

{
  /* <iframe src="https://docs.google.com/document/d/e/2PACX-1vQEXovz183JNX51TUUWlmRlTTIQlVZxtOQVwOJTijl1pAkFi_JNMtKurT5zHerYcMBcZxpJkrcU0VhU/pub?embedded=true"></iframe> */
}
{/* <Link 
    className="Resume_button" 
    role="button"
    to="https://docs.google.com/document/d/1Y76f5XKECmG6bzd_AMMGS6MhCS7aG_f44R0sQO2azz8/export?format=pdf"
    >VIEW RESUME</Link> */}