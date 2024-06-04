import React from "react";
import praesterno from "../../assets/img/praesterno.png";
import "../Portfolio/Portfolio.css"

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolioSection">
      <h1 className="portfolioHeader">portfolio</h1>
      {/* <div class="btn">
          <a class="btn__btn portfolio__header btn__btn--white btn__btn--animated" href="#portfolioSection">Discover more</a>
        </div>  */}

      <div className="portfolio__body">
        
      <div className="card cardEmpty">
          <div className="cardContent">
            <h2 className="cardNameEmpty">
              In the making
              <div className="cardTechIcons">
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-html5"></use>
                </svg>
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-css3"></use>
                </svg>
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-sass"></use>
                </svg>
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-react"></use>
                </svg>
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-typescript"></use>
                </svg>
              </div>
            </h2>

            <div className="faIcons">
              <a className="cardLink" href="https://github.com/KaroLLain">
                <i className="faIcons__item fa fa-github" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <img className="cardImg" src={praesterno} alt="" />
          <div className="cardContent">
            <h2 className="cardName">
              Fundacja Praesterno
              <div className="technologies--icons cardTechIcons">
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-css3"></use>
                </svg>
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-sass"></use>
                </svg>
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-javascript"></use>
                </svg>
              </div>
            </h2>

            <div className="faIcons">
              <a
                className="cardLink"
                href="https://github.com/KaroLLain/praesterno"
              >
                <i className="faIcons__item fa fa-github" aria-hidden="true" />
              </a>
              <a className="cardLink" href="https://praesterno.karolain.pl">
                <i className="faIcons__item fa fa-link" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="card cardEmpty">
          <div className="cardContent">
            <h2 className="cardNameEmpty">
              In the making
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
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-react"></use>
                </svg>
                <svg className="techIcon cardTechIcon">
                  <use xlinkHref="/sprite.svg#icon-typescript"></use>
                </svg>
              </div>
            </h2>

            <div className="faIcons">
              <a className="cardLink" href="https://github.com/KaroLLain">
                <i className="faIcons__item fa fa-github" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
