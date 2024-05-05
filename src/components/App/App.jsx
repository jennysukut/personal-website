import { useEffect, useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useInView } from "react-intersection-observer";

import "./App.css";
import Nav from "../Nav/Nav";
import Main from "../Main/Main";
import Skills from "../Skills/Skills";
import Resume from "../Resume/Resume";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";

function App() {
  // const test1 = Skills;
  //document.querySelector("#test1");
  // console.log(test1);

  useEffect(() => {
    const testCircle = document.querySelector("#testcircle");
    console.log(testCircle);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("allgreen", entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(entry.target);
        });
        console.log(entries);
      },
      { threshold: 0.5 }
    );

    observer.observe(testCircle);
  }, []);

  // document.addEventListener("DOMContentLoaded", function () {
  //   // const testCircle = document.querySelector("#testcircle");
  //   // console.log(testCircle);

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       console.log(entries);
  //       entries.forEach((entry) => {
  //         entry.target.classList.toggle("testcss", entry.isIntersecting);
  //         //if (entry.isIntersecting) observer.unobserve(entry.target);
  //       });
  //     },
  //     { threshold: 0.5 }
  //   );

  //   observer.observe(testCircle);
  // });

  // const observer = new IntersectionObserver(
  //   (entries) => {
  //     entries.forEach((entry) => {
  //       entry.target.classList.toggle("allgreen", entry.isIntersecting);
  //       if (entry.isIntersecting) observer.unobserve(entry.target);
  //     });
  //     console.log(entries);
  //   },
  //   { threshold: 0.5 }
  // );

  // observer.observe(testCircle);

  return (
    <div className="page">
      <Nav />
      <Main />
      <Skills />
      <Resume />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
