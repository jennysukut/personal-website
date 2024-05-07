const setIntersectionObservers = () => {
  ///MAIN DETAILS OBSERVER
  const mainDetails = document.querySelector(".main__details-text");

  const mainDetailsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      mainDetails.classList.toggle("fadeInFromLeft", entry.isIntersecting);
      if (entry.isIntersecting) mainDetailsObserver.unobserve(mainDetails);
    });
  });

  mainDetailsObserver.observe(mainDetails);

  ///SKILLS CIRCLES OBSERVER 1
  const circleSection = document.querySelector("#skills__circle-container");
  const firstCircle = document.querySelector("#skills__circle-1");
  const secondCircle = document.querySelector("#skills__circle-2");
  const thirdCircle = document.querySelector("#skills__circle-3");

  const circleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        firstCircle.classList.toggle("rotate", entry.isIntersecting);
        secondCircle.classList.toggle("bounceFromLeft", entry.isIntersecting);
        thirdCircle.classList.toggle("slideUp", entry.isIntersecting);
        // if (entry.isIntersecting) circleObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.25 }
  );

  circleObserver.observe(circleSection);

  ///SKILLS CIRCLES OBSERVER 2
  const circleSection2 = document.querySelector("#skills__circle-container-2");
  const fourthCircle = document.querySelector("#skills__circle-4");
  const fifthCircle = document.querySelector("#skills__circle-5");

  const circleObserver2 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        fifthCircle.classList.toggle("rotate", entry.isIntersecting);
        fourthCircle.classList.toggle(
          "slideInFromTopLeft",
          entry.isIntersecting
        );
        // if (entry.isIntersecting) circleObserver2.unobserve(entry.target);
      });
    },
    { threshold: 0.1 }
  );

  circleObserver2.observe(circleSection2);

  ///SKILLS OSBERVER FOR TITLE SLIDE
  const skillsTitles = document.querySelectorAll("#skills-title");

  const skillsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("slideInFromLeft", entry.isIntersecting);
        if (entry.isIntersecting) skillsObserver.unobserve(entry.target);
      });
    },
    { threshold: 0 }
  );

  skillsTitles.forEach((title) => {
    skillsObserver.observe(title);
  });

  ///TECH TITLE OBSERVER
  const techTitle = document.querySelector("#tech-title");

  const techTitleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("slideDown", entry.isIntersecting);
        if (entry.isIntersecting) techTitleObserver.unobserve(entry.target);
      });
    },
    { threshold: 0 }
  );

  techTitleObserver.observe(techTitle);

  ///RESUME SECTION OBSERVER
  const resumeSection = document.querySelector("#resume");
  const resumeTitle = document.querySelector(".resume__title");
  const resumeSkillsYrs = document.querySelectorAll(
    ".resume__skill-yrs-timeline"
  );
  const resumeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        resumeTitle.classList.toggle("fadeIn", entry.isIntersecting);
        resumeSkillsYrs.forEach((item) => {
          item.classList.toggle("typewriter", entry.isIntersecting);
        });
        // resumeEducation.classList.toggle(
        // "fadeInFromLeft",
        // entry.isIntersecting
        // );
        if (entry.isIntersecting) resumeObserver.unobserve(resumeSection);
      });
    },
    { threshold: 0 }
  );

  resumeObserver.observe(resumeSection);

  ///REDUME EDUCATION OBSERVER
  const resumeEducation = document.querySelector(".resume__education");

  const resumeEdObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        console.log("looking at education");
        entry.target.classList.toggle("fadeInFromLeft", entry.isIntersecting);
        if (entry.isIntersecting) resumeEdObserver.unobserve(resumeEducation);
      });
    },
    { threshold: 0 }
  );

  resumeEdObserver.observe(resumeEducation);

  ///WORK EXPERIENCE OBSERVER
  const workExperience = document.querySelectorAll(
    ".resume__workExperience_list"
  );

  const workExperienceObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("fadeIn", entry.isIntersecting);
        if (entry.isIntersecting)
          workExperienceObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.01 }
  );

  workExperience.forEach((exp) => {
    workExperienceObserver.observe(exp);
  });

  //ABOUT ME SECTION OBSERVER
  const aboutMeSection = document.querySelector("#aboutMe");
  const aboutMeTitle = document.querySelector(".aboutMe__main_title");

  const aboutMeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      aboutMeTitle.classList.toggle("slideDown", entry.isIntersecting);
      if (entry.isIntersecting) aboutMeObserver.unobserve(entry.target);
    });
  });
  aboutMeObserver.observe(aboutMeSection);

  ///ABOUT ME DETAILS OBSERVER
  const aboutMeDetails = document.querySelectorAll(".ami");

  const aboutMeDetailsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("fadeIn", entry.isIntersecting);
        if (entry.isIntersecting)
          aboutMeDetailsObserver.unobserve(entry.target);
      });
    },
    { threshold: 0 }
  );

  aboutMeDetails.forEach((detail) => {
    aboutMeDetailsObserver.observe(detail);
  });

  /// ABOUT ME SHORT DETAILS OBSERVER
  const aboutMePoints = document.querySelectorAll(".amPoints");

  const aboutMePointsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("fadeInFromLeft", entry.isIntersecting);
        //if (entry.isIntersecting) aboutMePointsObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  aboutMePoints.forEach((point) => {
    aboutMePointsObserver.observe(point);
  });

  ///ABOUT ME CIRCLES OBSERVER
  // const aboutMeCircles = document.querySelector(".aboutMe__gradientCircles");
  const aboutMeCircles = document.querySelector(".aboutMe__gradientCircles");

  const aboutMeCircle1 = document.querySelector(".aboutMe__gradient-circle-1");
  const aboutMeCircle2 = document.querySelector(".aboutMe__gradient-circle-2");
  const forFunSection = document.querySelector(".aboutMe__hobbies");

  const aboutMeCirclesObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        aboutMeCircle1.classList.toggle("bounceFromLeft", entry.isIntersecting);
        aboutMeCircle2.classList.toggle("slideUp", entry.isIntersecting);
        forFunSection.classList.toggle("littleBounce", entry.isIntersecting);
        // if (entry.isIntersecting)
        // aboutMeCirclesObserver.unobserve(entry.target);
      });
    },
    { threshold: 0 }
  );

  aboutMeCirclesObserver.observe(aboutMeCircles);

  ///CONTACT SECTION OBSERVER
  const contactSection = document.querySelector("#contact");
  const contactTitle = document.querySelector(".contactMe__title-large");
  const contactInfo = document.querySelector(".contactMe__contact-info");
  const copyrightInfo = document.querySelector(".copyright-info");

  const contactSectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        contactTitle.classList.toggle("fadeInFromRight", entry.isIntersecting);
        contactInfo.classList.toggle("fadeIn", entry.isIntersecting);
        copyrightInfo.classList.toggle("lilBounce", entry.isIntersecting);
        if (entry.isIntersecting)
          contactSectionObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );

  contactSectionObserver.observe(contactSection);
};

export default setIntersectionObservers;
