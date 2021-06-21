import React, { useState } from "react";
import "./App.css";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import Header from "./components/Header/Header";
import AboutMe from "./components/About Me/AboutMe.js";

// TODO: add state for mobile menu visibility
// TODO: move isOpen functionality into different component
// TODO: fix overflow issue

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Header toggle={toggle} />
      <MobileMenu isOpen={isOpen} toggle={toggle} />
      <AboutMe />
    </div>
  );
};

export default App;
