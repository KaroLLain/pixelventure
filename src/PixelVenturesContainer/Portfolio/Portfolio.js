import React from "react";
import praesterno from "../../assets/img/praesterno.png";

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolioSection">
      <h1 className="portfolio__header">portfolio</h1>
      {/* <div class="btn">
          <a class="btn__btn portfolio__header btn__btn--white btn__btn--animated" href="#portfolioSection">Discover more</a>
        </div>  */}

      <div className="portfolio__body">
      <div class="card">
          <img className="cardImg" src={praesterno} alt="" />
          <div class="card__content">
            <h2 className="cardName">
              Fundacja Praesterno
              <div className="technologies--icons cardTechIcons">
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-html5"></use>
                </svg>
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-css3"></use>
                </svg>
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-sass"></use>
                </svg>
              </div>
            </h2>

            <div className="faIcons">
              <a className="cardLink" href="https://github.com/KaroLLain/client">
                <i className="faIcons__item fa fa-github" aria-hidden="true" />
              </a>
              <a className="cardLink" href="https://praesterno.karolain.pl">
                <i className="faIcons__item fa fa-link" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div class="card">
          <img className="cardImg" src={praesterno} alt="" />
          <div class="card__content">
            <h2 className="cardName">
              Fundacja Praesterno
              <div className="technologies--icons cardTechIcons">
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-html5"></use>
                </svg>
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-css3"></use>
                </svg>
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-sass"></use>
                </svg>
              </div>
            </h2>

            <div className="faIcons">
              <a className="cardLink" href="https://github.com/KaroLLain/client">
                <i className="faIcons__item fa fa-github" aria-hidden="true" />
              </a>
              <a className="cardLink" href="https://praesterno.karolain.pl">
                <i className="faIcons__item fa fa-link" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div class="card">
          <img className="cardImg" src={praesterno} alt="" />
          <div class="card__content">
            <h2 className="cardName">
              Fundacja Praesterno
              <div className="technologies--icons cardTechIcons">
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-html5"></use>
                </svg>
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-css3"></use>
                </svg>
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-sass"></use>
                </svg>
              </div>
            </h2>

            <div className="faIcons">
              <a className="cardLink" href="https://github.com/KaroLLain/client">
                <i className="faIcons__item fa fa-github" aria-hidden="true" />
              </a>
              <a className="cardLink" href="https://praesterno.karolain.pl">
                <i className="faIcons__item fa fa-link" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
