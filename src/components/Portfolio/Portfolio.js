import React, { Component } from "react";
import {render } from 'react-dom'
import "./Portfolio.css";
import "../../index.css";
import Tank from "../../assets/Tank_Icon.png";
import WarScreenshot from "../../assets/war_game_screenshot_small.png";
import Planet from "../../assets/Planet_Icon.png";
import NasaScreenshot from "../../assets/nasa_screenshot_small.png";
import Film from "../../assets/Film_Icon.png";
import Nterflix from "../../assets/Nterflix_screenshot_small.png";
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
              <li className="project_item flip_card">
                <ul className="War_project">
                  <div className="thumbnail_wrapper flip_card_inner">
                    <li className="thumbnail">
                      {" "}
                      <img className="icon flip_card_front" src={Tank} />
                      <img className="flip_card_back war_screenshot"src={WarScreenshot} />
                    </li>
                  </div>
                  <li className="links">
                    {" "}
                    <a
            
                      className="ViewCode deployed_link"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                      href="https://butterfly1of4.github.io/Game-of-War/"
                    >
                      GAME OF WAR
                    </a>
                    
                    <a
                      className="ViewCode"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                      href="https://github.com/butterfly1of4/Game-of-War"
                    >
                      VIEW CODE
                    </a>


                  </li>
                </ul>
              </li>

              <li className="project_item flip_card">
                <ul className="Nasa_project">
                  <div className="thumbnail_wrapper flip_card_inner">
                    <li className="thumbnail">
                      {" "}
                      <img className="icon flip_card_front" src={Planet} />
                      <img className=" flip_card_back war_screenshot"src={NasaScreenshot} />
                    </li>
                  </div>
                  <li className="links">
                    {" "}
                    <a
                      className="ViewCode"
                      className="deployed_link"
                      style={{ textDecoration: "none" }}
                      href="https://butterfly1of4.github.io/ui-pattern/"
                    >
                      NASA PLANETS PAGE
                    </a>
                    <a
                      className="ViewCode"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                      href="https://github.com/butterfly1of4/ui-pattern"
                    >
                      VIEW CODE
                    </a>
                  </li>
                </ul>
              </li>
              <li className="project_item flip_card">
                <ul className="Nterflix_project">
                  <div className= "thumbnail_wrapper flip_card_inner">
                  <li className="thumbnail">
                    {" "}
                    <img className="icon flip_card_front" src={Film} /><img className="flip_card_back war_screenshot"src={Nterflix} />
                  </li>
                  </div>
                  <li className="links">
                    {" "}
                    <a
                      className="ViewCode"
                      className="deployed_link"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                      href="https://butterfly1of4.github.io/project8-frontend"
                    >
                      NTERFLIX
                    </a>
                    <a
                      className="ViewCode"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                      href="https://github.com/butterfly1of4/project8-frontend"
                    >
                      VIEW FRONTEND CODE
                    </a>
                    <a
                      className="ViewCode"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                      href="https://github.com/butterfly1of4/project8-backend"
                    >
                      VIEW BACKEND CODE
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <p className="additionalWork">
            <h3 className="additionalTitle">
              Additional Work<div className="Period">:</div>
            </h3>
            <div className="additionalItems">
              <ul className="additionalList">
                <li className="listItem">
              RESPONSIVE WEBPAGE 
          </li>
          <li>
              <div className="divider">|</div></li>
              <li className="listItem">
              STATISTICS WITHOUT BORDERS
              </li>
              <li>
              <div className="divider">|</div></li>
              <li className="listItem">
              Project #3{" "}
              {/* STORYBOOK */}</li>
              <li>
              <div className="divider">|</div></li>
              <li className="listItem">Project #4{" "}</li>
            </ul>
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
