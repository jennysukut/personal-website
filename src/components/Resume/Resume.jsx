import "./Resume.css";
import resumeWhiteLines from "../../images/ResumeWhiteLines.svg";

function Resume() {
  return (
    <div className="resume">
      <img src={resumeWhiteLines} alt="resumeLines" className="resume__lines" />
    </div>
  );
}

export default Resume;
