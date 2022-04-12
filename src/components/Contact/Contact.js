import React, { Component } from "react";
import "./Contact.css";
import "../../index.css";
import JHouckResumeUpdated from "../../JHouckResumeUpdated.pdf";

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
                <span className="bold_text">
                  Want to collaborate Looking for a dev with mad skills?
                </span>{" "}
                <br />
                <span className="other_text">
                  I’m always open to discussing new projects or partnerships.
                </span>
              </p>
            </div>
          </div>
          <div className="button">
            <div className="button_link">
              <a
                className="Resume_link"
                style={{ textDecoration: "none" }}
                href={JHouckResumeUpdated}
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
