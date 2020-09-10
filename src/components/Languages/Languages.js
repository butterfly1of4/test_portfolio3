import React from "react";
import "./Languages.css";
import "../../index.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

// Function based React Component
const Languages = (props) => {
  return (
    <div className="Languages">
      <span>
      <h1 className="Languages_title">Languages<div className="Period">.</div></h1>
      </span>
     
        <div className="outer_wrapper">
        <ul className="Languages_list">
          <li className="Languages_item">Django
          <div className="slashes">//</div></li>
          <li className="Languages_item">Python</li>
          <div className="slashes">//</div>
          <li className="Languages_item">Node</li>
          <div className="slashes">//</div>
          <li className="Languages_item">Express</li>
          <div className="slashes">//</div>
          <li className="Languages_item">Git</li>
          <div className="slashes">//</div>
          <li className="Languages_item"><span>Back End</span></li>
          <div className="slashes">//</div>
          <li className="Languages_item">MongoDB</li>
          <div className="slashes">//</div>
          <li className="Languages_item">SQL</li>
          <div className="slashes">//</div>
          <span>
          <li className="Languages_item">Front End</li> </span><div className="slashes">//</div>
          <li className="Languages_item">CSS</li>
          <div className="slashes">//</div>
          <li className="Languages_item">HTML</li>
          <div className="slashes">//</div>
          <li className="Languages_item">Javascript</li>
        </ul>
        </div>
      
    </div>
  );
};

export default Languages;
