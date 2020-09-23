import React, { Component } from "react";

import "../styles/App.scss";

import Header from "./Header";
import LeftAside from "./LeftAside";
import RightAside from "./RightAside";
import Footer from "./Footer";

import php from "../assets/PHP-logo.svg";
import js from "../assets/Unofficial_JavaScript_logo_2.svg";
import ajax from "../assets/AJAX_logo_by_gengns.svg";
import rclogo from "../assets/React-icon.svg";
import mysql from "../assets/mysql-ar21.svg";

const socialList = [
  {
    id: 1,
    iconClass: "fab fa-github",
    link: "https://github.com/ejjoj",
    text: "GitHub",
  },
  {
    id: 2,
    iconClass: "fab fa-linkedin-in",
    link: "https://www.linkedin.com/in/bartosz-szyma%C5%84ski-a6b418169/",
    text: "LinkedIn",
  },
  {
    id: 3,
    iconClass: "fab fa-facebook-f",
    link: "https://www.facebook.com/bartosz.szymaski/",
    text: "Facebook",
  },
  {
    id: 4,
    iconClass: "fab fa-instagram",
    link: "https://www.instagram.com/bartek.szymaski/",
    text: "Instagram",
  },
];

const techList = [
  {
    id: 1,
    svg: php,
    alt: "PHP",
  },
  {
    id: 2,
    svg: js,
    alt: "JavaScript",
  },
  {
    id: 3,
    svg: ajax,
    alt: "AJAX",
  },
  {
    id: 4,
    svg: rclogo,
    alt: "React.js",
  },
  {
    id: 5,
    svg: mysql,
    alt: "MySQL",
  },
];

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <div className="main-columns">
          <LeftAside />
          <RightAside />
        </div>
        <div className="main-cta">
          <ul className="social">
            {socialList.map((item) => (
              <li key={item.id} className="social-item">
                <a className="social-link" href={item.link}>
                  <i className={item.iconClass}></i>
                  <p className="social-text">{item.text}</p>
                </a>
              </li>
            ))}
          </ul>
          <div className="tech">
            {techList.map((techItem) => (
              <div key={techItem.id} className="tech-item">
                <figure className="tech-item__figure">
                  <img
                    src={techItem.svg}
                    alt={techItem.alt}
                    className="tech-item__image"
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
