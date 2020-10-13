import React, { Component } from "react";
import { render } from "react-dom";
import "./Portfolio.css";
import "../../index.css";
import Tank from "../../assets/Tank_Icon.png";
import WarScreenshot from "../../assets/war_game_screenshot_small.png";
import Planet from "../../assets/Planet_Icon.png";
import NasaScreenshot from "../../assets/smallNasa-new.png";
import Film from "../../assets/Film_Icon.png";
import Nterflix from "../../assets/Nterflix_screenshot_small.png";
import Pallete from "../../assets/pallete_icon.png";
import Responsive from "../../assets/responsive_screenshot_small.png";
import Sigma from "../../assets/sigma_1.png";
import SWB from "../../assets/Statistics_screenshot_small.png";
import Book from "../../assets/book_icon.png";
import Address from "../../assets/small-pythoncli.png";

import { Router, Link, Switch } from "react-router-dom";

// React Class Component
class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio" id="Portfolio">
        <h1 className="Portfolio_title">
          Portfolio<div className="Period">.</div>
        </h1>
        <div className="pic_text_list">
          <div className="project_wrapper">
            <ul className="project_list">
              {/* //Game of war */}
              <li className="project_item flip_card War">
                <ul className="War_project">
                  <div className="thumbnail_wrapper flip_card_inner">
                    <li className="thumbnail">
                      {" "}
                      <img className="icon  flip_card_front" src={Tank} />
                      <img
                        className="flip_card_back war_screenshot"
                        src={WarScreenshot}
                      />
                    </li>
                  </div>
                  <li className="links">
                    {" "}
                    <a
                      className="ViewCode deployed_link"
                      target="_blank"
                      href="https://butterfly1of4.github.io/Game-of-War/"
                    >
                      GAME OF WAR
                    </a>
                    <a
                      className="ViewCode"
                      target="_blank"
                      href="https://github.com/butterfly1of4/Game-of-War"
                    >
                      VIEW CODE
                    </a>
                  </li>
                </ul>
              </li>
              {/* //Nasa */}
              <li className="project_item flip_card Nasa">
                <ul className="Nasa_project">
                  <div className="thumbnail_wrapper flip_card_inner">
                    <li className="thumbnail">
                      {" "}
                      <img className="icon flip_card_front" src={Planet} />
                      <img
                        className=" flip_card_back war_screenshot"
                        src={NasaScreenshot}
                      />
                    </li>
                  </div>
                  <li className="links">
                    {" "}
                    <a
                      className="ViewCode deployed_link"
                      href="https://butterfly1of4.github.io/ui-pattern/"
                    >
                      NASA PLANETS PAGE
                    </a>
                    <a
                      className="ViewCode"
                      target="_blank"
                      href="https://github.com/butterfly1of4/ui-pattern"
                    >
                      VIEW CODE
                    </a>
                  </li>
                </ul>
              </li>
              {/* //Nterflix */}
              <li className="project_item flip_card Nterflix">
                <ul className="Nterflix_project">
                  <div className="thumbnail_wrapper flip_card_inner">
                    <li className="thumbnail">
                      {" "}
                      <img className="icon flip_card_front" src={Film} />
                      <img
                        className="flip_card_back war_screenshot"
                        src={Nterflix}
                      />
                    </li>
                  </div>
                  <li className="links nterflix_links">
                    {" "}
                    <a
                      className="ViewCode deployed_link"
                      target="_blank"
                      href="https://butterfly1of4.github.io/project8-frontend"
                    >
                      NTERFLIX
                    </a>
                    <a
                      className="ViewCode"
                      target="_blank"
                      href="https://github.com/butterfly1of4/project8-frontend"
                    >
                      VIEW FRONTEND CODE
                    </a>
                    <a
                      className="ViewCode"
                      target="_blank"
                      href="https://github.com/butterfly1of4/project8-backend"
                    >
                      VIEW BACKEND CODE
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="project_wrapper_bottom">
            <ul className="project_list">
              {/* //Responsive */}
              <li className="project_item flip_card Responsive">
                <ul className="Responsive_project">
                  <div className="thumbnail_wrapper flip_card_inner">
                    <li className="thumbnail">
                      {" "}
                      <img className="icon  flip_card_front" src={Pallete} />
                      <img
                        className="flip_card_back war_screenshot"
                        src={Responsive}
                      />
                    </li>
                  </div>
                  <li className="links">
                    {" "}
                    <a
                      href="https://butterfly1of4.github.io/GA-responsive-webiste/"
                      className="deployed_link"
                      target="_blank"
                    >
                      RESPONSIVE WEBPAGE
                    </a>
                    <a
                      className="ViewCode"
                      target="_blank"
                      href="https://github.com/butterfly1of4/GA-responsive-webiste"
                    >
                      VIEW CODE
                    </a>
                  </li>
                </ul>
              </li>
              {/* Statistics */}
              <li className="project_item flip_card Statistics">
                <ul className="SWB_project">
                  <div className="thumbnail_wrapper flip_card_inner">
                    <li className="thumbnail">
                      {" "}
                      <img className="icon  flip_card_front" src={Sigma} />
                      <img
                        className="flip_card_back war_screenshot"
                        src={SWB}
                      />
                    </li>
                  </div>
                  <li className="links swb_links">
                    {" "}
                    <a
                      href="https://swbapp.netlify.app/"
                      className="deployed_link"
                      target="_blank"
                    >
                      STATISTICS WITHOUT BORDERS
                    </a>
                    <a
                      className="ViewCode"
                      target="_blank"
                      href="https://github.com/statisticswithoutborders/swb-app"
                    >
                      VIEW CODE
                    </a>
                  </li>
                </ul>
              </li>
              {/* Python Address Book */}
              <li className="project_item flip_card Address">
                <ul className="Address_project">
                  <div className="thumbnail_wrapper flip_card_inner">
                    <li className="thumbnail">
                      {" "}
                      <img className="icon  flip_card_front" src={Book} />
                      <img
                        className="flip_card_back war_screenshot"
                        src={Address}
                      />
                    </li>
                  </div>
                  <li className="links">
                    {" "}
                    <a
                      href=""
                      className="deployed_link"
                      // target="_blank"
                    >
                      ADDRESS BOOK
                    </a>
                    <a
                      className="ViewCode"
                      href="https://github.com/butterfly1of4/python_CLI_project"
                      target="_blank"
                    >
                      VIEW CODE
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <p className="additionalWork">
            <h3 className="additionalTitle">
              Additional <div className = "inlinePeriod">Work<div className="Period">:</div></div>
            </h3>
            <div className="additionalItems">More projects are in the works!</div>
          </p>
        </div>
      </div>
    );
  }
}
// render(<Portfolio />)
export default Portfolio;

// https://project8-backend.herokuapp.com/expire & https://project8-backend.herokuapp.com/release
// https://github.com/butterfly1of4/GA-responsive-webiste
