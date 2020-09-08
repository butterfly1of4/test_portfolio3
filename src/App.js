import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Portfolio from "./components/Portfolio/Portfolio";
import Languages from "./components/Languages/Languages";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Route path="/" exact={true}>
        <LandingPage />
        <Portfolio />
        <Languages />
        <About />
        <Contact /><Footer />
      </Route>
      <Route path="/Portfolio" exact={true}>
        <Portfolio /></Route>
      <Route path="/Languages" exact={true}>
        <Languages />
      </Route>
      <Route path="/About" exact={true} >
        <About />
      </Route>
      <Route path="/Contact" exact={true}>
        <Contact />
      </Route>
      <Route path="/Footer" exact={true}>
        <Footer />
      </Route>
      </div>
  )
}

export default App;
