import React from "react";
import profilePhoto from "../../assets/img/portretkopia.jpg";

export default function About() {
  return (
    <section className="about" id="aboutSection">
      <img src={profilePhoto} alt="" class="about__profilePhoto" />

      <div className="aboutBox">
        <h3 className="aboutHeader">Hello I'm Karolina</h3>
        <p className="aboutText">
          Since March 2022, I've been intensively developing my programming
          skills, focusing on frontend technologies such as HTML, CSS, SCSS,
          JavaScript and React. <br/><br/>  Driven by my love for creativity and willing to
          constantly evolve I made creating websites my new passion. <br/> My
          aesthetic sense and basic knowledge in UX/UI allows me to
          design sites, that are not only aesthetically pleasing, but
          also intuitive and user-friendly.<br/> <br/>  My goal is to build my knowledge and
          constantly learn new technologies, to create exellent web applications,
          which are not only beautiful, but also fully responsive and
          optimized. <br/><br/> I am open to both remote and on-site work.
        </p>

        <div className="linksWrapper">
          <div className="svgWrapper">
            <svg height="40" width="150">
              <rect className="shape" height="40" width="150" />
            </svg>
            <div className="text">Download CV</div>
          </div>

          <div className="faWrapper">
            <a className="faWrapperItem" href="https://github.com/KaroLLain">
              <i class="fa fa-github-square" />
            </a>
            <a
              className="faWrapperItem"
              href="https://www.linkedin.com/in/karolina-knap-65b4a112b/"
            >
              <i class="fa fa-linkedin-square" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
