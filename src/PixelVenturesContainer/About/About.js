import React from "react";
import profilePhoto from "../../assets/img/portretkopia.jpg";

export default function About() {
  return (
    <section class="about" id="aboutSection">
      <img src={profilePhoto} alt="" class="about__profilePhoto" />

      <div class="about__box">
        <h3 class="about__box--header">Hello I'm Karolina</h3>
        <p class="about__box--text">
          My journey with programming began in 2018.{" "}
          <span>
            <br />
          </span>{" "}
          At that time I just to change my career path. Driven by couriosity I
          joined a Java bootcamp. After 5 monts of hard work I decided it was
          not for me. Lookig back I think, that I choose the wrong language for
          a beginner, but still it gave me a good foundation. In the meantime
          I've got really tempting job offer as psychotheraphist, so I decided
          to pursue it.{" "}
          <span>
            <br />
          </span>
          In 2021 I decide to try it again. But this time to do it better, I did
          my research and asked myself what do I really love to do. As a person
          who loves to create I chose UX/Frontend Developmment direction and I
          lost my head for it.
          <span>
            <br />
          </span>
          Since that time, I have shred my time between being a mother and
          learning. I constantly want to learn and have a lot of passoion and
          dedication for this.{" "}
          <span>
            <br />
          </span>
          Designing and creating brings me joy. I'm looking for a job which also
          will be enjoyable. I am open to both remote and on-site work.
        </p>
      </div>
    </section>
  );
}
