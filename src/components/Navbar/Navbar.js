import React, { Component } from "react";
import "./Navbar.css";
import CircleLogo from "../../assets/CircleLogo.png";
import { Link } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import "react-sticky-header/styles.css";
import StickyHeader from "react-sticky-header";
import Scrollchor from "react-scrollchor";
import About from "../About/About";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }

  
  }
  render() {
    return (
      <StickyHeader
        header={
          <nav className="NavBar">
            <div className="Header ">
              <a href="#Footer" className="circleLogo">
              <img src={CircleLogo} className="circleLogo" alt="circleLogo" />
              </a>
              <div className="Header_root">
                <ul className="Nav_item_wrapper">
                  <li className="Nav_item">
                    <a
                      className="Nav_link"
                      style={{ textDecoration: "none" }}
                      href="#Landing_Page"
                    >
                      HOME
                    </a>
                  </li>
                  <li className="Nav_item">
                    <a
                      className="Nav_link"
                      style={{ textDecoration: "none" }}
                      href="#Portfolio"
                    >
                      PORTFOLIO
                    </a>
                  </li>
                  <li className="Nav_item">
                    <a
                      className="Nav_link"
                      style={{ textDecoration: "none" }}
                      href="#Skills"
                    >
                      SKILLS
                    </a>
                  </li>
                  <li className="Nav_item">
                    <a
                      className="Nav_link"
                      style={{ textDecoration: "none" }}
                      href="#About"
                    >
                      ABOUT
                    </a>
                  </li>
                  <li className="Nav_item">
                    <a
                      className="Nav_link"
                      style={{ textDecoration: "none" }}
                      href="#Contact"
                    >
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        }
      />
    );
  }
}

export default Navbar;
