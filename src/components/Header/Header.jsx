import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__nav">
        <p className="header__nav_skills">skills</p>
        <p className="header__nav_resume">resume</p>
        <p className="header__nav_about">about</p>
        <p className="header__nav_contact">contact</p>
      </div>
    </div>
  );
}

export default Header;
