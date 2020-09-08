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
                  <Link className="Nav_link" to="/"> 
                    HOME
                  </Link>
                </li>
                <li className="Nav_item">
                    {/* <Scrollchor to="/Portfolio" className="Nav_link">PORTFOLIO</Scrollchor> */}
                  <Link className="Nav_link" to="/Portfolio/"> 
                    PORTFOLIO
                   </Link>
                </li>
                <li className="Nav_item">
                {/* <Scrollchor to="/Languages" className="Nav_link">LANGUAGES</Scrollchor> */}

                  <Link className="Nav_link" to="/Languages"> 
                    LANGUAGES
                  </Link>
                </li>
                <li className="Nav_item">
                  {/* <Scrollchor to="/About" className="Nav_link">ABOUT</Scrollchor> */}

                  <Link className="Nav_link" to="/About"> 
                    ABOUT
                  </Link>
                </li>{" "}
                <li className="Nav_item">
                  {/* <Scrollchor to="/Contact" className="Nav_link">CONTACT</Scrollchor> */}
                  <Link className="Nav_link" to="/Contact"> 
                    CONTACT
                  </Link>
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
