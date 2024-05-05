const setIntersectionObservers = () => {
  const skillsSection = document.querySelector("#skillsComp");

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
};

export default setIntersectionObservers;
