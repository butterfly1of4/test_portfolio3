import React from "react";
import "./Languages.css";
import "../../index.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

// Function based React Component
const Languages = (props) => {
  return (
    <div className="Languages" id="Skills">
      <span>
        <h1 className="Languages_title">
          Skills<div className="Period">.</div>
        </h1>
      </span>

      <div className="outer_wrapper">
        <div className="Language_list">

          <div className="Language_item">Django</div>
          <div className="slashes">  //</div>
          <div className="Language_item">Python </div>
          <div className="slashes">//</div>

          <div className="Language_item">Node </div>
          <div className="slashes">//</div>

          <div className="Language_item">Express </div>
          <div className="slashes">//</div>

          <div className="Language_item">Git </div>
          <div className="slashes">//</div>

          <div className="Language_item">MongoDB </div>
          <div className="slashes">//</div>

          <div className="Language_item">SQL </div>
          <div className="slashes">//</div>

          <div className="Language_item">Front End </div>
          <div className="slashes">//</div>

          <div className="Language_item">CSS </div>
          <div className="slashes">//</div>

          <div className="Language_item">HTML </div>
          <div className="slashes">//</div>

          <div className="Language_item">Javascript </div>

        </div>
      </div>
    </div>
  );
};

export default Languages;

//Django  //  Python  //  Node  //  Express  //  Git  //  Django  //  MongoDB  //  SQL  //  Front End  //  CSS  //  HTML  //   Javascript
