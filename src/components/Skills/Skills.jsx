import "./Skills.css";
import purpleLines from "../../images/PurpleLinesSkills.svg";
import gradientCircle1 from "../../images/GradientCircle1.svg";
import gradientCircle2 from "../../images/GradientCircle2.svg";
import gradientCircle3 from "../../images/GradientCircle3.svg";

function Skills() {
  return (
    <div className="skills">
      <img src={purpleLines} alt="lines" className="skills__lines" />
      <img
        src={gradientCircle1}
        alt="gradientCircle1"
        className="skills__circle-1 fadeIn"
      />
      <img
        src={gradientCircle2}
        alt="gradientCircle2"
        className="skills__circle-2 fadeInSlowest"
      />
      <img
        src={gradientCircle3}
        alt="gradientCircle3"
        className="skills__circle-3 fadeInSlower"
      />
    </div>
  );
}

export default Skills;
