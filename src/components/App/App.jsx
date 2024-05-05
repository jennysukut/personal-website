import { useEffect, useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "./App.css";
import Nav from "../Nav/Nav";
import Main from "../Main/Main";
import Skills from "../Skills/Skills";
import Resume from "../Resume/Resume";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";

function App() {
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
