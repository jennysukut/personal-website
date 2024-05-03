import "./Main.css";
import { StaggerTextReveal } from "stagger-text-reveal-animation";
import whiteLines from "../../images/MainWhiteLines.svg";

function Main() {
  return (
    <div className="main">
      <div className="main__title">
        <h3 className="main__title-name fadeInFromRight">Jennifer Sukut</h3>
        <div className="main__title-details">
          <StaggerTextReveal
            text={"web developer"}
            className="main__title-details"
            fontSize={25}
          />
        </div>
      </div>
      <div className="main__details-and-lines fadeIn">
        <img src={whiteLines} alt="lines" className="main__lines" />
        <div className="main__details fadeInFromLeft">
          Bringing passion, creativity, quality designs, and functionality to
          web-based applications.
        </div>
      </div>
    </div>
  );
}

export default Main;
