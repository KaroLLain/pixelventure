import React from "react";

export default function Contact() {
  return (
    <section class="contact" id="contactSection">
      <div class="contact__container">
        <h1 class="contact__container__header portfolio__header">
          get in touch
        </h1>
        <div class="contact__container__content">
          <div class="contact__container__content__form">
            <h2 class="h__second">Message me</h2>
            <form class="contact__container__content__form__box" action="">
              <input type="text" name="name" placeholder="Name" />
              <input type="email" name="email" placeholder="Email" />
              <input type="text" name="subject" placeholder="Subject" />
              <textarea
                name="message"
                cols="30"
                rows="4"
                placeholder="Message"
              ></textarea>
              {/* <div class="btn contact__box">
                  <a class="contact__box__btn btn__btn btn__btn--small" href="#aboutSection">Contact me</a>
                </div> */}

              <div class="wrapper contact__box">
                <a class="button" href="#aboutSection">
                  Enquire
                </a>
              </div>

              {/* Filter: https://css-tricks.com/gooey-effect/  */}
              <svg className="svgStyle"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
              >
                <defs>
                  <filter id="goo">
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="10"
                      result="blur"
                    />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                      result="goo"
                    />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                  </filter>
                </defs>
              </svg>
            </form>
          </div>

          <div class="contact__container__content__info">
            <p class="contact__container__content__info--header h__second">
              Contact info:
            </p>
            <div class="contact__container__content__info__wrapper">
              <div class="contact__container__content__info__wrapper__box">
                <svg class="contact__container__content__info--svg">
                  <use xlinkHref="/sprite.svg#icon-user"></use>
                </svg>
                <svg class="contact__container__content__info--svg">
                  <use xlinkHref="/sprite.svg#icon-mail"></use>
                </svg>
              </div>
              <span></span>
              <div class="contact__container__content__info__wrapper__box">
                <div class="contact__container__content__info--name h__third">
                  Karolina
                </div>
                <div class="contact__container__content__info--email h__third">
                  karolain@wop.pl
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
