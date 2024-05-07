import "./Skills.css";
import { useState, useEffect } from "react";
import purpleLines from "../../images/PurpleLinesSkills.svg";
import gradientCircle1 from "../../images/GradientCircle1.svg";
import gradientCircle2 from "../../images/GradientCircle2.svg";
import gradientCircle3 from "../../images/GradientCircle3.svg";
import gradientCircle4 from "../../images/GradientCircle4.svg";
import gradientCircle5 from "../../images/GradientCircle5.svg";
import Nav from "../Nav/Nav";

function Skills() {
  const specializedSkills = [
    "web development",
    "graphic design",
    "front-end programming",
    "back-end engineering",
  ];
  const generalSkills = [
    "problem solving",
    "adaptability",
    "good communication",
    "eye for design",
    "passionate",
    "care for quality",
    "intuitive",
    "strong work ethic",
  ];

  const codingLAT = [
    "HTML",
    "CSS",
    "COMMAND LINE",
    "JAVASCRIPT",
    "REACT.JS",
    "VITE",
    "WEBPACK",
    "FIGMA",
    "GIT",
    "GITHUB",
    "NODE.JS",
    "REACT ROUTER",
    "REDUX",
    "EXPRESS.JS",
    "REST API",
    "MONGO DB",
    "MONGOOSE",
    "SQL",
    "NOSQL",
  ];

  return (
    <div id="skillsComp" name="skills" className="skills component">
      <Nav color="hotpink" page="skills" />
      <div id="skills" className="skills__specializedSkills_container">
        <div className="skills__title-container">
          <p id="skills-title" className="specializedSkills__title-small">
            specialized
          </p>
          <h3 id="skills-title" className="specializedSkills__title-large">
            SKILLS
          </h3>
        </div>
        <ul className="specializedSkills__list">
          {specializedSkills.map((skill) => {
            return (
              <li className="specializedSkills__skill" key={skill}>
                {skill}
              </li>
            );
          })}
        </ul>
      </div>

      <div id="skills__circle-container" className="skills__circle-container">
        <img
          id="skills__circle-1"
          src={gradientCircle1}
          alt="gradientCircle1"
          className="skills__circle-1 "
        />
        <img
          id="skills__circle-2"
          src={gradientCircle2}
          alt="gradientCircle2"
          className="skills__circle-2"
        />
        <img
          id="skills__circle-3"
          src={gradientCircle3}
          alt="gradientCircle3"
          className="skills__circle-3"
        />
      </div>

      <div id="skills" className="skills__generalSkills_container">
        <div className="skills__title-container">
          <h3 id="skills-title" className="generalSkills__title-large">
            OTHER
          </h3>
          <p id="skills-title" className="generalSkills__title-small">
            general skills
          </p>
        </div>
        <ul className="generalSkills__list">
          {generalSkills.map((skill) => {
            return (
              <li className="generalSkills__skill" key={skill}>
                {skill}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="skills__codingLAT_container">
        <h3 id="tech-title" className="codingLAT__title">
          CODING LANGUAGES & TECHNOLOGIES
        </h3>
        <ul className="codingLAT__list">
          {codingLAT.map((skill) => {
            return (
              <li className="codingLAT__skill" key={skill}>
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
      <div id="skills__circle-container-2" className="circle-container-2">
        <img
          id="skills__circle-4"
          src={gradientCircle4}
          alt="gradientCircle4"
          className="skills__circle-4"
        />
        <img
          id="skills__circle-5"
          src={gradientCircle5}
          alt="gradientCircle5"
          className="skills__circle-5"
        />
      </div>
      <div className="skills__blank-div"></div>
    </div>
  );
}

export default Skills;
