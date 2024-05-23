import React from "react";

export default function Contact() {
  return (
    <section class="contact" id="contactSection">
      <div class="contactContainer">
        <h1 class="contactHeader portfolioHeader">
          get in touch
        </h1>
        <div class="contactContent">
          <div class="contactContentForm">
            <h2 class="h__second">Message me</h2>
            <form class="contactFormBox" action="">
              <div className="firstLineBox">
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
              </div>
              <input type="text" name="subject" placeholder="Subject" />
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>

              <div class="wrapper contactBox">
                <a class="button" href="#aboutSection">
                  Enquire
                </a>
              </div>

{/* -------------  STYLED BUTTON  ------------- */}
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

          <div class="contactInfo">
            <p class="contactInfoHeader h__second">
              Contact info
            </p>
            <div class="contactInfoWrapper">
              <div class="contactInfoWrapperBox ">
                <svg class="contactInfoSvg">
                  <use xlinkHref="/sprite.svg#icon-user"></use>
                </svg>
                <svg class="contactInfoSvg">
                  <use xlinkHref="/sprite.svg#icon-mail"></use>
                </svg>
              </div>

              <div class="contactInfoWrapperBox">
                <div class="contactInfoName h__third">
                  Karolina
                </div>
                <div class="contactInfoEmail h__third">
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
