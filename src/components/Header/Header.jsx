import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__menu header__menu-about">
        <p className="header__menu_text">about</p>
      </div>
      <div className="header__menu header__menu-resume">
        <p className="header__menu_text">resume</p>
      </div>
      <div className="header__menu header__menu-skills">
        <p className="header__menu_text">skills</p>
      </div>
      <div className="header__menu header__menu-contact">
        <p className="header__menu_text">contact</p>
      </div>
    </header>
  );
}

export default Header;
