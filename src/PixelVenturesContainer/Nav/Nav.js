import React from "react";
import logo from "../../assets/img/LogoPV2.png";
import "../Nav/Nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list__item">
          <a href="#home" className="nav__list__link">
            <img src={logo} alt="logo Karolina" className="nav__list__link--img" />
          </a>
        </li>
        <li className="nav__list__item">
          <a href="#home" className="nav__list__link">
            HOME
          </a>
        </li>
        <li className="nav__list__item">
          <a href="#portfolioSection" className="nav__list__link">
            MY WORK
          </a>
        </li>
        <li className="nav__list__item">
          <a href="#aboutSection" className="nav__list__link">
            ABOUT
          </a>
        </li>
        <li className="nav__list__item">
          <a href="#contactSection" className="nav__list__link">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}
