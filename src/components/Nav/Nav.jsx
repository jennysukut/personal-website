import { useState, useEffect, useRef } from "react";
import "./Nav.css";
import { Link } from "react-scroll";

function Nav() {
  //have a state set for the current page and have that correspond to a classname linked to nav__nav
  //that adjusts the color of the text and position of the dot
  //${backgroundType === "solid" ? "nav__colorful" : ""}

  return (
    <div className="nav">
      <div id="navMenu" className="nav__links">
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="nav__links_skills"
          //onSetActive={handleSetActive}
        >
          skills
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="nav__links_skills"
          //onSetActive={handleSetActive}
        >
          about
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="nav__links_skills"
          //onSetActive={handleSetActive}
        >
          contact
        </Link>
        <Link
          activeClass="active"
          to="resume"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="nav__links_skills"
          //onSetActive={handleSetActive}
        >
          resume
        </Link>
        {/* <p className="nav__links_skills">skills</p>
        <p className="nav__links_about">about</p>
        <p className="nav__links_contact">contact</p>
        <p className="nav__links_resume">resume</p> */}
      </div>
    </div>
  );
}

export default Nav;
