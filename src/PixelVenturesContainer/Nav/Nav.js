import React from 'react';
import logo from "../../assets/img/LogoPV2.png"

export default function Nav() {
    return (
    <nav class="nav">
        <ul class="nav__list">
            <li class="nav__list__item">
                <a href="#home" class="nav__list__link"><img src={logo} alt="logo Karolina" class="nav__list__link--img"/></a>
            </li>
            <li class="nav__list__item"><a href="#home" class="nav__list__link">HOME</a></li>
            <li class="nav__list__item"><a href="#portfolioSection" class="nav__list__link">MY WORK</a></li>
            <li class="nav__list__item"><a href="#aboutSection" class="nav__list__link">ABOUT</a></li>
            <li class="nav__list__item"><a href="#contactSection" class="nav__list__link">CONTACT</a></li>
        </ul>
    </nav>
    )
}