import React, { Component } from "react";
import "./Portfolio.css";
import "../../index.css";
import Tank_Icon from "../../assets/Tank_Icon.png";
import War_game_screenshot from "../../assets/war_game_screenshot_small.png";
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
import Markdown from "../../assets/Markdown.png"
import Md_logo from "../../assets/Md_logo.png"

// React Class Component
class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio" id="Portfolio">
        <h1 className="Portfolio_title">
          Portfolio<div className="Period">.</div>
        </h1>
        <div className="pic_text_list">
          <div className="project_list">
            {/* //Game of war */}
            <div className="project_item">
              <div className="flip_card">
                <div className=" flip_card_inner">
                  <div className=" flip_card_front">
                    <img className="icon" src={Tank_Icon} />
                  </div>
                  <div className="flip_card_back">
                    <img className="screenshot" src={War_game_screenshot} />
                  </div>
                </div>
              </div>
              <div className="links">
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
              </div>
            </div>

            {/* //Nasa */}
            <div className="project_item">
              <div className="flip_card">
                <div className=" flip_card_inner">
                  <div className=" flip_card_front">
                    <img className="icon " src={Planet} />
                  </div>
                  <div className="flip_card_back">
                    <img className="screenshot" src={NasaScreenshot} />
                  </div>
                </div>
              </div>
              <div className="links">
                <a
                  className="ViewCode deployed_link"
                  href="https://butterfly1of4.github.io/ui-pattern/"
                  target="_blank"
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
              </div>
            </div>
            {/* //Nterflix */}
            <div className="project_item">
              <div className="flip_card">
                <div className=" flip_card_inner">
                  <div className="  flip_card_front">
                    <img className="icon" src={Film} />
                  </div>
                  <div className="flip_card_back">
                    <img className=" screenshot" src={Nterflix} />
                  </div>
                </div>
              </div>
              <div className="links">
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
              </div>
            </div>
          </div>
          <div className="project_list">
            {/* //Responsive */}
            <div className="project_item">
              <div className="flip_card">
                <div className=" flip_card_inner">
                  <div className=" flip_card_front">
                    <img className="icon  " src={Pallete} />
                  </div>
                  <div className="flip_card_back">
                    <img className="screenshot" src={Responsive} />
                  </div>
                </div>
              </div>
              <div className="links">
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
              </div>
            </div>
            {/* Statistics */}
            <div className="project_item">
              <div className="flip_card">
                <div className=" flip_card_inner">
                  <div className=" flip_card_front">
                    <img className="icon" src={Sigma} />
                  </div>
                  <div className="flip_card_back">
                    <img className="screenshot" src={SWB} />
                  </div>
                </div>
              </div>
              <div className="links">
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
              </div>
            </div>
           
              {/* Markdown Preview */}
              <div className="project_item ">
              <div className="flip_card">
                <div className=" flip_card_inner">
                  <div className=" flip_card_front">
                    <img className="icon  " src={Md_logo} />
                  </div>
                  <div className="flip_card_back">
                    <img className="screenshot" src={Markdown} />
                  </div>
                </div>
              </div>
              <div className="links">
              <a
                  href="https://react-markdown-previewer-butterfly1of4.netlify.app/"
                  className="deployed_link"
                  target="_blank"
                >
                  MARKDOWN PRE-VIEWER
                </a>
                <a
                  className="ViewCode"
                  href="https://github.com/butterfly1of4/React-Markdown-Viewer"
                  target="_blank"
                >
                  VIEW CODE
                </a>
              </div>
            </div>
          </div>
          <p className="additionalWork">
            <h3 className="additionalTitle">
              Additional
              <div className="inlinePeriod work_period">
                Work<div className="Period">:</div>
              </div>
            </h3>
            <p className="others">
              <div className="others_list">
                <div className="other-work">
                  <a
                    className="other-links deployed_link"
                    href="https://github.com/butterfly1of4/State_capitals"
                    target="_blank"
                  >
                    State Capitals Quiz
                  </a>
                  <a
                    className="ViewCode"
                    href="https://github.com/butterfly1of4/State_capitals"
                    target="_blank"
                  >
                    VIEW CODE
                  </a>
                </div>
                <div className="other-work">
                   <a
                  href=""
                  className="deployed_link"
                  // target="_blank"
                >
                  Address Book
                </a>
                <a
                  className="ViewCode"
                  href="https://github.com/butterfly1of4/python_CLI_project"
                  target="_blank"
                >
                  VIEW CODE
                </a>
                </div>
                <div className="other-work">
                  <a
                    className="other-links deployed_link"
                    href="https://github.com/butterfly1of4/Guessing-game"
                    target="_blank"
                  >
                    Number Guessing Game
                  </a>
                  <a
                    className="ViewCode"
                    href="https://github.com/butterfly1of4/Guessing-game"
                    target="_blank"
                  >
                    VIEW CODE
                  </a>
                </div>
              </div>
            </p>
            <div className="additionalItems">
              More projects are in the works!
            </div>
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
