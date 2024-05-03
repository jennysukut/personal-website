import "./AboutMe.css";
import { useState, useEffect } from "react";
import { StaggerTextReveal } from "stagger-text-reveal-animation";

function AboutMe() {
  return (
    <>
      <StaggerTextReveal text={"Test Transition Text"} />
    </>
  );
}

export default AboutMe;
