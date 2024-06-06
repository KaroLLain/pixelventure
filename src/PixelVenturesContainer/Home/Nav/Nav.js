import React, {useState} from "react";
import logo from "../../../assets/img/LogoPV2.png";
import "./Nav.css";

export default function Nav() {
  // to change burger classes
  const [burgerClass, setBurgerClass] = useState("burgerBar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuCilcked] = useState(false);

  // toggle burger menu change
  const updateMenu = ()=> {
    if(!isMenuClicked) {
      setBurgerClass("burgerBar clicked")
      setMenuClass("menu visible")
    } else {
      setBurgerClass("burgerBar unclicked")
      setMenuClass("menu hidden")
    }
    setIsMenuCilcked(!isMenuClicked);
  }
  
  return (
    <nav className="nav">
      <div className="navWrapper">
        <div className="logoWrapper">
          <a href="#home" className="nav__list__link">
                  <img src={logo} alt="logo Karolina" className="nav__list__link--img" />
          </a>
        </div>
        <div className="linkWrapper">
          <ul className="nav__list">
            {/* <li className="nav__list__item">
              <a href="#home" className="nav__list__link">
                <img src={logo} alt="logo Karolina" className="nav__list__link--img" />
              </a>
            </li> */}
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
        </div>
      </div>

      <div className="navBurgerContainer">
      
      </div>
    </nav>

  );
}
