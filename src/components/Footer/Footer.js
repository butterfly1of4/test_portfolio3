import React, { Component } from 'react'
import "./Footer.css"
import "../../index.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import LinkedIN from "../../assets/LinkedIN.png"
import JHLogo from "../../assets/JHLogo.png"
import JH2 from "../../assets/JH2.png"
import Github from "../../assets/Github.png"
import Email from "../../assets/Email.png"
import LinkedIN_Hover from "../../assets/LinkedIN_Hover.png"
import Email_Hover from "../../assets/Email_Hover.png"
import Github_Hover from "../../assets/Gethub_Hover.png"
// React Class Component
class Footer extends Component {
    constructor(){
        super()

         this.state ={}
    }

    render() {
        return (
            <div className="Footer" id="Footer">
                <div className="Footer_icons">
               <a href="https://github.com/butterfly1of4" target="_blank">
                   {" "}
                <div className="container">
                <img src={Github}  alt="Github" className="displayIcon"/>
                <div className="overlay">
                    <img src={Github_Hover} />
                </div>
                </div></a>
                <a href="mailto:jhouck29@gmail.com" target="_blank">
                    <div className="container">
                    <img src={Email} alt="Email" className="displayIcon"/>
                    <div className="overlay">
                    <img src={Email_Hover} />
                    </div>
                    </div>
                    </a>
                <a href="https://www.linkedin.com/in/jennifer-houck/" target="_blank">
                    <div className="container" >
                    <img src={LinkedIN} alt="LinkedIN" className="displayIcon"/>
                    <div className="overlay">
                   <img src={LinkedIN_Hover}
                 /></div>
                    </div>
                    </a>
                </div>
                <div className="Copywrite">Built by Jenn Houck <div className="Divider">|</div> © 2020</div>
                <div className="JHLogo">
                    <a className="JHLogo"href="#Landing_Page">
                    <img src={JHLogo} className="JHLogo" alt="JHLogo"/></a>
                </div>
            </div>
        )
    }
}

export default Footer

