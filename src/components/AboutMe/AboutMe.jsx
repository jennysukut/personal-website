import "./AboutMe.css";
import { useState, useEffect } from "react";
import profileImage from "../../images/ProfileImage.jpg";

function AboutMe() {
  const [detailsDisplay, setDetailsDisplay] = useState("code");
  //define a state variable here to see whether the state is code or text

  const decodeDetails = () => {
    setDetailsDisplay("text");
  };

  const codeDetails = () => {
    setDetailsDisplay("code");
  };

  const printState = () => {
    console.log(detailsDisplay);
  };

  return (
    <div className="aboutMe">
      <img
        onClick={printState}
        src={profileImage}
        alt="Jennifer Sukut"
        className="aboutMe__img"
      />
      <div className="aboutMe__info">
        <h2 className="aboutMe__title">A Bit About Me:</h2>
        <div className="aboutMe__details">
          <div
            className={`aboutMe__codeDetailsContainer ${
              detailsDisplay === "text"
                ? "aboutMe__codeDetailsContainer-hidden"
                : ""
            }`}
            onClick={decodeDetails}
            //onMouseOver={decodeDetails}
          >
            <p className="aboutMe__codeDetails">{`const me = {`}</p>
            <p className="aboutMe__codeDetails">{`name: ‘Jennifer Sukut’,`}</p>
            <p className="aboutMe__codeDetails">{`about: [‘World Traveler’, ‘Lover of Color’, ‘Bit of an Entrepreneur’, ‘Bookish Lady’, ‘Enthusiastic Coder’, ‘Creative & Artisan’, ‘Sustainability Focused’],`}</p>
            <p className="aboutMe__codeDetails">{`};`}</p>
          </div>
          <div
            className={`aboutMe__decodeDetailsContainer ${
              detailsDisplay === "text"
                ? "aboutMe__decodeDetailsContainer-visible"
                : ""
            }`}
            onClick={codeDetails}
            //onMouseOver={codeDetails}
          >
            <p className="aboutMe__decodeDetails">//World Traveler</p>
            <p className="aboutMe__decodeDetails">//Lover of Color</p>
            <p className="aboutMe__decodeDetails">//Bit of an Entrepreneur</p>
            <p className="aboutMe__decodeDetails">//Bookish Lady </p>
            <p className="aboutMe__decodeDetails">//Enthusiastic Coder </p>
            <p className="aboutMe__decodeDetails">//Creative & Artisan</p>
            <p className="aboutMe__decodeDetails"> //Sustainability Focused</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
