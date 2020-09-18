import React, { Component } from "react";
import "./Contact.css";
import "../../index.css";
import CurrentResume from "../../CurrentResume.pdf"
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
                <bold>Want to collaborate? </bold> Looking for a dev with mad
                skills? <br />
                I’m always open to discussing new projects or partnerships.
              </p>
            </div>
          </div>
          <div className="buttons">
            <div className="Button_resume_button">
              <div className="ButtonLink_wrapper">
                <button className="Resume_button">
                  <a
                    className="Resume_link"
                    style={{ textDecoration: "none" }}
                    href={CurrentResume} target="_blank"
                  >
                    VIEW RESUME
                  </a>
                </button>
              </div>
            </div>
            <div className="ContactLink_wrapper">
              
              <button className="Contact_button">
                <a className="Contact_link" style={{ textDecoration: "none" }}href="mailto:jhouck29@gmail.com" target="_blank">
                CONTACT ME</a></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
