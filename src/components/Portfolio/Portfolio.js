import React, { Component } from "react";
import "./Portfolio.css";
import "../../index.css";
import Tank from "../../assets/Tank_Icon.png";
import Planet from "../../assets/Planet_Icon.png";
import Film from "../../assets/Film_Icon.png";
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
              <li className="project_item">
                <ul className="War_project">
                  <li className="thumbnail">
                    {" "}
                    <img className="icon" src={Tank} />
                  </li>
                  <li className="links">
                    {" "}
                    <a
              className="ViewCode deployed_link" target="_blank"
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

              <li className="project_item">
                <ul className="Nasa_project">
                  <li className="thumbnail">
                    {" "}
                    <img className="icon" src={Planet} />
                  </li>

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
              <li className="project_item">
                <ul className="Nterflix_project">
                  <li className="thumbnail">
                    {" "}
                    <img className="icon" src={Film} />
                  </li>
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
            <h3 className="additionalTitle">Additional Work<div className="Period">:</div></h3>
            <div className="additionalItems">
              Responsive Webpage{" "}<div className="divider">|</div>Project #2{" "}
              <div className="divider">|</div>Project #3 {" "}
              <div className="divider">|</div>Project #4 {" "}
            </div>
          </p>
        </div>
      </div>
    );
  }
}

export default Portfolio;

// https://project8-backend.herokuapp.com/expire & https://project8-backend.herokuapp.com/release
// https://github.com/butterfly1of4/GA-responsive-webiste
