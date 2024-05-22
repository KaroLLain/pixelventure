import React from 'react';

export default function Header() {
    return (
        <header class="header" id="home">
            <div class="header__box">
                <h1 class="header__box__message">
                    <span class="header__box__message__element--first">MOODY <span class="muscle">DESIGN</span> MIXED</span>
                    <span class="header__box__message__element--second">WITH <span class="muscle">TECHNOLOGY</span></span>
                </h1>
            <div class="header__box__desciption">for the love of <span class="muscle">creativity</span></div>
            </div>

            <a href="#portfolioSection" class="btn__header btnFlip" data-back="Or just hire me!" data-front="Discover more"> </a>

        </header>
    )
}