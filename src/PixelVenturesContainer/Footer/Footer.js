import React from "react";

export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer__content footer__container">
        <p class="footer__text">
          CopyRight © <span class="footer__date">2024</span> KaroLain | All
          Rights Reserved
        </p>
        <div class="footer_icons">
          <a href="https://github.com/KaroLLain">
            <i class="fa fa-github-square"/>
          </a>
          <a href="https://www.linkedin.com/in/karolina-knap-65b4a112b/">
            <i class="fa fa-linkedin-square"/>
          </a>
        </div>
      </div>
    </footer>
  );
}
