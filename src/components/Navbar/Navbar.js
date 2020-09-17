import React, { Component } from "react";
import "./Navbar.css";
import CircleLogo from "../../assets/CircleLogo.png";
import { Link } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage"
import "react-sticky-header/styles.css";
import StickyHeader from 'react-sticky-header'
import Scrollchor from 'react-scrollchor';
import About from '../About/About'

class Navbar extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      // <div className="Page">
      <StickyHeader
        header = {
        <nav className="NavBar">
          <div className="Header ">
            <img src={CircleLogo} className="circleLogo" alt="circleLogo" />
            <div className="Header_root">
              <ul className="Nav_item_wrapper">
                <li className="Nav_item">
                    {/* <Scrollchor to="/" className="Nav_link">HOME</Scrollchor> */}
                  <a className="Nav_link" href="#Landing_Page"> 
                    HOME
                  </a>
                </li>
                <li className="Nav_item">
                    {/* <Scrollchor to="/Portfolio" className="Nav_link">PORTFOLIO</Scrollchor> */}
                  <a className="Nav_link" href="#Portfolio"> 
                    PORTFOLIO
                   </a>
                </li>
                <li className="Nav_item">
                {/* <Scrollchor to="/Languages" className="Nav_link">LANGUAGES</Scrollchor> */}

                  <a className="Nav_link" href="#Skills"> 
                    SKILLS
                  </a>
                </li>
                <li className="Nav_item">
                  {/* <Scrollchor to="/About" className="Nav_link">ABOUT</Scrollchor> */}

                  <a className="Nav_link" href="#About"> 
                    ABOUT
                  </a>
                </li>{" "}
                <li className="Nav_item">
                  {/* <Scrollchor to="/Contact" className="Nav_link">CONTACT</Scrollchor> */}
                  <a className="Nav_link" href="#Contact"> 
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        } />
        // </div>
    );
  }
}

export default Navbar;
