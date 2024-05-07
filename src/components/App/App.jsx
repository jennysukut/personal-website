import { useEffect, useState, useRef } from "react";
import setIntersectionObservers from "../../utils/intersectionObserver";

import "./App.css";
import Main from "../Main/Main";
import Skills from "../Skills/Skills";
import Resume from "../Resume/Resume";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";

function App() {
  useEffect(() => {
    setIntersectionObservers();
  });

  return (
    <div className="page">
      <Main />
      <Skills />
      <Resume />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
