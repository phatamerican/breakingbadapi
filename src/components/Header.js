import React from "react";
import logo from "../img/logo.png";

const Header = () => {
  return (
    <header className="center">
      <a href="https://www.imdb.com/title/tt0903747/">
        <img src={logo} alt="Breaking Bad Logo" />
      </a>
    </header>
  );
};

export default Header;
