import { useEffect, useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useInView } from "react-intersection-observer";
import setIntersectionObservers from "../../utils/intersectionObserver";

import "./App.css";
import Nav from "../Nav/Nav";
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
      <Nav />
      <Main />
      <Skills />
      <Resume />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
