import "./Contact.css";
import Nav from "../Nav/Nav";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Contact() {
  return (
    <div id="contact" name="contact" className="contact component">
      <Nav color="cream" page="contact" />
      <div id="test1" className="contactMe__title">
        <p className="contactMe__title-small">
          interested in working together?
        </p>
        <p className="contactMe__title-large">CONTACT ME</p>
      </div>

      <div className="contactMe__c-c-info">
        <div className="contactMe__contact-info">
          <p className="contact_info">
            email:
            <a href="mailto:jennysukut@gmail.com">jennysukut@gmail.com</a>
          </p>
          <p className="contact_info">
            github:
            <a href="https://github.com/jennysukut" target="_blank">
              https://github.com/jennysukut
            </a>
          </p>
        </div>
        <div className="contactMe__contact-info-mobile">
          <p className="contact_info">
            <a href="mailto:jennysukut@gmail.com">DROP ME AN EMAIL</a>
          </p>
          <p className="contact_info">
            <a href="https://github.com/jennysukut" target="_blank">
              VISIT MY GITHUB
            </a>
          </p>
        </div>
        <p className="copyright-info">ⓒ 2024 Jennifer Sukut</p>
      </div>
    </div>
  );
}

export default Contact;
