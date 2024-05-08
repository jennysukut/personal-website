import { useEffect, useState, useRef } from "react";
import setIntersectionObservers from "../../utils/intersectionObserver";

import "./App.css";
import Main from "../Main/Main";
import Skills from "../Skills/Skills";
import Resume from "../Resume/Resume";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import MobileNav from "../MobileNav/MobileNav";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const handleMobileMenuClick = () => {
    console.log("mobile menu clicked to set state!");
    setActiveModal("mobile-menu");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    setIntersectionObservers();
  });

  return (
    <>
      <div className="underConstructionMessage">
        <p className="underConstructionMessage__text">
          Sorry, the mobile version of this site is under construction & will be
          available shortly!
        </p>
        <p className="underConstructionMessage__text">
          Return to a larger screen size to interact with the main app.
        </p>
      </div>
      <div className="page">
        <MobileNav
          closeActiveModal={closeActiveModal}
          activeModal={activeModal}
          handleMobileMenuClick={handleMobileMenuClick}
        />
        <Main />
        <Skills />
        <Resume />
        <AboutMe />
        <Contact />
      </div>
    </>
  );
}

export default App;
