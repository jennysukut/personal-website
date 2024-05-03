import "./Header.css";

function Header() {
  //have a state set for the current page and have that correspond to a classname linked to header__nav
  //that adjusts the color of the text and position of the dot
  return (
    <div className="header">
      <div className="header__nav header__nav-main">
        <p className="header__nav_skills">skills</p>
        <p className="header__nav_resume">resume</p>
        <p className="header__nav_about">about</p>
        <p className="header__nav_contact">contact</p>
      </div>
    </div>
  );
}

export default Header;
