import { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  //have a state set for the current page and have that correspond to a classname linked to nav__nav
  //that adjusts the color of the text and position of the dot
  //${backgroundType === "solid" ? "nav__colorful" : ""}

  return (
    <div className={`nav`}>
      <div className="nav__links">
        <p className="nav__links_skills">skills</p>
        <p className="nav__links_about">about</p>
        <p className="nav__links_contact">contact</p>
        <p className="nav__links_resume">resume</p>
      </div>
    </div>
  );
}

export default Nav;
