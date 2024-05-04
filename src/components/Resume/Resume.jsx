import "./Resume.css";
import resumeWhiteLines from "../../images/ResumeWhiteLines.svg";

function Resume() {
  const skillYears = [
    { work: "graphic design", timeline: "since 2010" },
    { work: "web development", timeline: "since 2014" },
    { work: "software engineering", timeline: "since 2023" },
  ];

  const workExperience = [
    {
      position: "Graphic Designer",
      company: "HEDUA",
      timeline: "Freelance 2010-2019",
    },
    {
      position: "Graphic Designer, Writer, & Business Developer",
      company: "Dear Magazine",
      timeline: "2014-2015",
    },

    {
      position: "Web Designer, Business Assistant, & Sushi Roller",
      company: "Indah Sushi",
      timeline: "2016-2017",
    },

    {
      position: "CEO & Baker",
      company: "Little Things Baking Co.",
      timeline: "2017-2019",
    },

    {
      position: "Owner & Artisan",
      company: "Color.Fully.Curated",
      timeline: "2021-2023",
    },

    {
      position: "Account Handler",
      company: "State Farm",
      timeline: "2022-2023",
    },
  ];

  const education = [
    {
      program: "Liberal Arts",
      school: "New College Franklin",
      location: "Franklin TN",
    },

    {
      program: "Full-Stack Engineering Certification",
      school: "TripleTen",
      location: "Online Bootcamp",
    },
  ];

  return (
    <div className="resume">
      <div className="resume__empty-div"></div>
      <p className="resume__title">RESUME</p>
      <div className="resume__skill-yrs">
        <div className="resume__skill-yrs-list">
          {skillYears.map((skill) => {
            return (
              <div>
                <p className="resume__skill-yrs-work">{skill.work} :</p>
                <p className="resume__skill-yrs-timeline">{skill.timeline}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="resume__workExperience">
        <h3 className="resume__workExperience_title">WORK EXPERIENCE</h3>
        {workExperience.map((exp) => {
          return (
            <div className="resume__workExperience_list">
              <p className="workExperience__position">{exp.position}</p>
              <p className="workExperience__company">{exp.company}</p>
              <p className="workExperience__timeline">{exp.timeline}</p>
            </div>
          );
        })}
      </div>
      <div className="resume__education">
        <p className="resume__education_title">EDUCATION</p>
        {education.map((ed) => {
          return (
            <div className="education__item">
              <p className="education__program">{ed.program}</p>
              <p className="education__school">{ed.school}</p>
              <p className="education__location">{ed.location}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Resume;
