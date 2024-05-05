import "./AboutMe.css";
import { useState, useEffect } from "react";
import { StaggerTextReveal } from "stagger-text-reveal-animation";
import profileImage from "../../images/ProfileImage2.svg";
import gradientCircle6 from "../../images/GradientCircle6.svg";
import gradientCircle7 from "../../images/GradientCircle7.svg";
import Nav from "../Nav/Nav";

function AboutMe() {
  const aboutMeInfo = {
    info: [
      "Hello, hello! My name is Jenny and I am a passionate, colorful lady who orients my life around beauty, positivity, and creative expression. I love to make things - with my hands, with my computer, and with my mind.",
      "I travel the world with my little family to experience what different ideas and cultures and landscapes have to offer. I feel to be human is a special, poignant call to see goodness - to cherish and nurture it.",
      "I believe deeply in my right and responsibility to make things better - from small things like handmade trinkets to taking part in large movements towards sustainability and ethical ways of being for the world.",
      "I believe that kind of change is possible with enough human connection. I strive for excellence and beauty in my work. I long to be part of something good and powerful and rewarding. I want to find likeminded people and work towards this necessary goal of bettering the way things are.",
      "My history: I come from an entrepreneurial background and have dabbled in many things: I published a periodical for a few years, worked as a graphic designer for a few more, ran a specialty bakery, and still dabble in my creative side with a jewelry business.",
      "The list of skills associated with all of these things is extensive and they all are part of the gumption I like to bring to the table. I love the creative side of things and strangely enough, thrive off the challenge of complex paperwork, ideas, and organization.",
      "Since I am a U.S. citizen traveling the world full time, I decided I could use my time to develop a set of skills I could use to work from anywhere. Creativity, complexity, and flexibility all came together to point me to the path of Software Engineering.",
    ],
    details: [
      "enthusiastic coder //",
      "world traveler //",
      "lover of color //",
      "bit of an entrepreneur //",
      "bookish lady //",
      "creative & artisan //",
      "sustainability focused //",
    ],
    hobbies:
      "Reading, Baking, Jamming to Fantastic Tunes, Polymer Clay Jewelry Creating, Long Walks, Beach Time with Family, Daydreaming, Crafting a Daily Colorful Outfit, Sharing Stories, Enjoying the Moments that Make Me Human.",
  };
  return (
    <div className="aboutMe">
      <Nav />
      <div className="aboutMe__empty-div"></div>
      <div className="aboutMe__main">
        <p className="aboutMe__main_title">ABOUT ME</p>
        <div className="aboutMe__main_info">
          {aboutMeInfo.info.map((info) => {
            return (
              <p className="aboutMe__info" key={info}>
                {info}
              </p>
            );
          })}
        </div>
      </div>
      <div className="aboutMe__photo-and-details">
        <img
          src={profileImage}
          alt="Jennifer Sukut"
          className="aboutMe__photo"
        />
        <div className="aboutMe__details">
          {aboutMeInfo.details.map((info) => {
            return (
              <p className="aboutMeDetail" key={info}>
                {info}
              </p>
            );
          })}
        </div>
        <div className="aboutMe__gradientCircles">
          <img
            src={gradientCircle6}
            alt="gradientCircle6"
            className="aboutMe__gradient-circle-1"
          />
          <img
            src={gradientCircle7}
            alt="gradientCircle7"
            className="aboutMe__gradient-circle-2"
          />
        </div>
        <div className="aboutMe__hobbies">
          <p className="aboutMe__hobbies_title">FOR FUN:</p>
          <p className="aboutMe__hobbies_list">{aboutMeInfo.hobbies}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
