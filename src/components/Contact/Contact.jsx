import "./Contact.css";
import Nav from "../Nav/Nav";

function Contact() {
  return (
    <div name="contact" className="contact">
      <Nav />
      <div className="contactMe__title">
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
