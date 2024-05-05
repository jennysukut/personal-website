import "./Skills.css";
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
    <div name="skills" className="skills">
      <Nav />
      <div className="skills__specializedSkills_container">
        <p className="specializedSkills__title-small">specialized</p>
        <h3 className="specializedSkills__title-large">SKILLS</h3>
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

      <div className="skills__circle-container">
        <img
          src={gradientCircle1}
          alt="gradientCircle1"
          className="skills__circle-1 rotate "
        />
        <img
          src={gradientCircle2}
          alt="gradientCircle2"
          className="skills__circle-2 bounceFromLeft"
        />
        <img
          src={gradientCircle3}
          alt="gradientCircle3"
          className="skills__circle-3 slideUp"
        />
      </div>

      <div className="skills__generalSkills_container">
        <h3 className="generalSkills__title-large">OTHER</h3>
        <p className="generalSkills__title-small">general skills</p>
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
        <h3 className="codingLAT__title">CODING LANGUAGES & TECHNOLOGIES</h3>
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
      <div className="circle-container-2">
        <img
          src={gradientCircle4}
          alt="gradientCircle4"
          className="skills__circle-4 fadeIn"
        />
        <img
          src={gradientCircle5}
          alt="gradientCircle5"
          className="skills__circle-5 fadeInSlowest"
        />
      </div>
    </div>
  );
}

export default Skills;
