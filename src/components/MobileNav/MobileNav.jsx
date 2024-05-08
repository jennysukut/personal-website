import { useState, useEffect, useRef } from "react";
import "./MobileNav.css";
import { Link } from "react-scroll";
import mobileMenuButton from "../../images/MobileMenu.svg";

function MobileNav(closeActiveModal, activeModal, handleMobileMenuClick) {
  //get state here to determine which place the nav is at to set the active circle?

  //make a mobile menu here that's only visible once the screen is under 500px
  //set another link to go up to the main
  //fix the link to skills to go to the top
  //make the button invisible when the modal is opened?

  return (
    <div className="mobileNavigation">
      <div id="mobileNavMenu" className="mobileMenu">
        <img
          src={mobileMenuButton}
          alt="mobileMenuButton"
          className="mobileMenu__button"
          onClick={handleMobileMenuClick}
        />
      </div>
      <div
        className={`mobileNav ${
          activeModal === "mobile-menu" ? "mobileNav-opened " : ""
        }`}
      >
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="mobileNav__link nav__links_skills "
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
          className="mobileNav__link nav__links_resume"
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
          className="mobileNav__link nav__links_about "
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
          className="mobileNav__link nav__links_contact"
          //onSetActive={handleSetActive}
        >
          contact
        </Link>
      </div>
    </div>
  );
}

export default MobileNav;
