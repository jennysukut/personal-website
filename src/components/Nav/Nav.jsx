import { useState, useEffect, useRef } from "react";
import "./Nav.css";
import { Link } from "react-scroll";

function Nav(props) {
  return (
    <div className="nav">
      <div id="navMenu" className={`nav__links ${props.color}`}>
        <div className={`activeCircle activeCircle_${props.page} blink`}></div>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="nav__link nav__links_skills "
          //onSetActive={handleSetActive}
        >
          skills
        </Link>
        <Link
          activeClass="active"
          to="resume"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="nav__link nav__links_resume"
          //onSetActive={handleSetActive}
        >
          resume
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="nav__link nav__links_about "
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
          className="nav__link nav__links_contact"
          //onSetActive={handleSetActive}
        >
          contact
        </Link>
      </div>
    </div>
  );
}

export default Nav;
