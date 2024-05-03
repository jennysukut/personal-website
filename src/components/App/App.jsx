import { useEffect, useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Skills from "../Skills/Skills";
import AboutMe from "../AboutMe/AboutMe";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Skills />
    </div>
  );
}

export default App;
