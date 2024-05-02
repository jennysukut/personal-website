import "./Title.css";
import titleNameDetails from "../../images/Title.svg";

function Title() {
  return (
    <div className="title">
      <img
        src={titleNameDetails}
        alt="Jennifer Sukut"
        className="title__name-and-details"
      />
    </div>
  );
}

export default Title;
