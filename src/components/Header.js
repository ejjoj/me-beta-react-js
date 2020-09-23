import React from "react";

import "../styles/Header.scss";

import me from "../assets/ja.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="tile tile-purple"></div>
      <div className="tile tile-yellow"></div>
      <h1 className="header-title">Hi, I am Bartosz!</h1>
      <figure className="header-figure">
        <img src={me} alt="Bartosz Szymański" className="header-image" />
      </figure>
    </header>
  );
};

export default Header;
