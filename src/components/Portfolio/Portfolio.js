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
        <div className="project_wrapper">
          <ul className="project_list">
            <li className="project_item">
              <div className="thumbnail">
                {" "}
                <img className="icon" src={Tank} />
              </div>
            </li>
            <li className="project_item">
              <div className="thumbnail">
                {" "}
                <img className="icon" src={Planet} />
              </div>
            </li>
            <li className="project_item">
              <div className="thumbnail">
                {" "}
                <img className="icon" src={Film} />
              </div>
            </li>
          </ul>
        </div>
        <p className="additionalWork">
          <h3 className="additionalTitle">Additional Work </h3>
          <div className="additionalItems">
            Responsive Webpage <div className="divider">|</div>Project #2{" "}
            <div className="divider">|</div>Project #3
          </div>
        </p>
      </div>
    );
  }
}

export default Portfolio;

// https://project8-backend.herokuapp.com/expire & https://project8-backend.herokuapp.com/release
// https://github.com/butterfly1of4/GA-responsive-webiste

// <ul className="project_thumbnails">
//             <li className="thumbnail_item">
//               <div className="thumbnail_pic">
//                 {" "}
//                 <img className="thumbnail" src={Tank} />
//               </div>
//               {/* <p className="portfolio_links">
//                 {" "}
//                 <a
//                   style={{ textDecoration: "none" }}
//                   href="https://github.com/butterfly1of4/Game-of-War"
//                 >
//                   GAME OF WAR
//                 </a>
//               </p> */}
//             </li>
//             <li className="thumbnail_item">
//               <div className="thumbnail_pic">
//                 {" "}
//                 <img className="thumbnail" src={Planet} />
//               </div>
//               {/* <p className="portfolio_links">
//                 {" "}
//                 <a
//                   className="deployed_link"
//                   style={{ textDecoration: "none" }}
//                   href="https://butterfly1of4.github.io/ui-pattern/"
//                 >
//                   NASA PLANETS PAGE
//                 </a>
//                 <br />
//                 <a
//                   className="ViewCode"
//                   style={{ textDecoration: "none" }}
//                   href="https://github.com/butterfly1of4/ui-pattern"
//                 >
//                   VIEW CODE
//                 </a>
//               </p> */}
//             </li>
//             <li className="thumbnail_item">
//               <div className="thumbnail_pic">
//                 <img className="thumbnail" src={Film} />
//               </div>
//               {/* <p className="portfolio_links">
//                 {" "}
//                 <a
//                   className="deployed_link"
//                   style={{ textDecoration: "none" }}
//                   href="https://butterfly1of4.github.io/project8-frontend"
//                 >
//                   NTERFLIX
//                 </a>
//                 <br />
//                 <a
//                   className="ViewCode"
//                   style={{ textDecoration: "none" }}
//                   href="https://github.com/butterfly1of4/project8-frontend"
//                 >
//                   VIEW CODE FOR FRONTEND
//                 </a>
//                 <br />
//                 <a
//                   className="ViewCode"
//                   style={{ textDecoration: "none" }}
//                   href="https://github.com/butterfly1of4/project8-backend"
//                 >
//                   VIEW CODE FOR BACKEND
//                 </a>
//               </p> */}
//             </li>
//           </ul>
//         </div>
