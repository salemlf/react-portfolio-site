import React, { useState } from "react";
import "./App.css";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import Header from "./components/Header/Header";
import AboutMe from "./Sections/AboutMe";
import Projects from "./Sections/Projects";
import TempBanner from "./components/TempBanner.js";

// TODO: move isOpen functionality into different component

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    // TODO: change to less gross way
    if (isOpen) {
      document.body.classList.remove("lock-scroll");
    } else {
      document.body.classList.add("lock-scroll");
    }
  };

  return (
    <div className="App">
      <Header toggle={toggle} />
      <MobileMenu isOpen={isOpen} toggle={toggle} />
      <AboutMe />
      <Projects />
      <TempBanner></TempBanner>
    </div>
  );
};

export default App;
