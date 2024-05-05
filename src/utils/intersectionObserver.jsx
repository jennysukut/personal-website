const setIntersectionObservers = () => {
  const skillsSection = document.querySelector("#skillsComp");
  const navMenu = document.querySelector("#navMenu");

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
        if (entry.isIntersecting) circleObserver.unobserve(circleSection);
      });
    },
    { threshold: 0.75 }
  );

  circleObserver.observe(circleSection);

  const skillsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("slideInFromLeft", entry.isIntersecting);
        if (entry.isIntersecting) skillsObserver.unobserve(entry);
      });
    },
    { threshold: 0 }
  );

  document.querySelectorAll("#skills-title").forEach((title) => {
    skillsObserver.observe(title);
  });

  const techTitle = document.querySelector("#tech-title");

  const techTitleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("slideDown", entry.isIntersecting);
      });
    },
    { threshold: 0 }
  );

  techTitleObserver.observe(techTitle);
};

export default setIntersectionObservers;
