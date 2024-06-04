import React from "react";
import '../Contact/Contact.css';

export default function Contact() {
  return (
    <section className="contact" id="contactSection">
      <div className="contactContainer">
        <h1 className="contactHeader portfolioHeader">
          get in touch
        </h1>
        <div className="contactContent">
          <div className="contactContentForm">
            <h2 className="h__second">Message me</h2>
            <form className="contactFormBox" action="">
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

              <div className="wrapper contactBox">
                <a className="button" href="#a">
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

          <div className="contactInfo">
            <p className="contactInfoHeader h__second">
              Contact info
            </p>
            <div className="contactInfoWrapper">
              <div className="contactInfoWrapperBox">
                <svg className="contactInfoSvg">
                  <use xlinkHref="/sprite.svg#icon-user"></use>
                </svg>
                <svg className="contactInfoSvg">
                  <use xlinkHref="/sprite.svg#icon-mail"></use>
                </svg>
              </div>

              <div className="contactInfoWrapperBox">
                <div className="contactInfoName h__third">
                  Karolina
                </div>
                <div className="contactInfoEmail h__third">
                  info@pixelventure.eu
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
