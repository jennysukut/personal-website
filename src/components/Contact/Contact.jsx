import "./Contact.css";
import Nav from "../Nav/Nav";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Contact() {
  //   const test1 = document.querySelector("#test");
  //   console.log(test1);

  //   document.addEventListener("DOMContentLoaded", function () {
  //     const observer = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach((entry) => {
  //           entry.target.classList.toggle("allgreen", entry.isIntersecting);
  //           if (entry.isIntersecting) observer.unobserve(entry.target);
  //         });
  //         console.log(entries);
  //       },
  //       { threshold: 0.5 }
  //     );

  //     observer.observe(test1);
  //   });

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         entry.target.classList.toggle("allgreen", entry.isIntersecting);
  //         if (entry.isIntersecting) observer.unobserve(entry.target);
  //       });
  //       console.log(entries);
  //     },
  //     { threshold: 0.5 }
  //   );

  //   observer.observe(test1);

  return (
    <div id="test" name="contact" className="contact">
      <Nav />
      <div id="test1" className="contactMe__title">
        <p className="contactMe__title-small">
          interested in working together?
        </p>
        <p className="contactMe__title-large fadeInFromRight">CONTACT ME</p>
      </div>

      <div className="contactMe__c-c-info">
        <div className="contactMe__contact-info fadeIn">
          <p className="contact_info">email: jennysukut@gmail.com</p>
          <p className="contact_info">github: https://github.com/jennysukut</p>
        </div>
        <p className="copyright-info lilBounce">ⓒ 2024 Jennifer Sukut</p>
      </div>
    </div>
  );
}

export default Contact;
