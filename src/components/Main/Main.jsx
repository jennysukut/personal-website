import "./Main.css";
import { StaggerTextReveal } from "stagger-text-reveal-animation";
import whiteLines from "../../images/MainWhiteLines.svg";
import Nav from "../Nav/Nav";
import { useEffect, useState } from "react";

function Main() {
  return (
    <div className="main component">
      <Nav color="cream" page="main" />
      <div className="main__title">
        <h3 className="main__title-name fadeInFromRight">Jennifer Sukut</h3>
        <div className="main__title-details">
          <StaggerTextReveal
            text={"web developer"}
            className="main__title-details"
            fontSize={25}
          />
        </div>
      </div>
      <div className="main__details-container">
        <div className="main__details-empty-div"></div>
        <p className="main__details-text fadeInFromLeft">
          Bringing passion, creativity, quality designs, and functionality to
          web-based applications.
        </p>
      </div>
    </div>
  );
}

export default Main;
