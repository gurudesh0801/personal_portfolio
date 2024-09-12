import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer class="footer-container">
        <div class="footer-content">
          <div class="footer-logo">
            <h2>Prasad D.</h2>
          </div>
          <div class="footer-links">
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div class="footer-social">
            <a
              href="https://www.linkedin.com/in/prasad-deshpande-a59530267"
              class="social-icon"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/guru_deshpande.0801/"
              class="social-icon"
              target="_blank"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/@GuruzCode"
              class="social-icon"
              target="_blank"
            >
              <i class="fab fa-youtube"></i>
            </a>
            <a
              href="https://x.com/gurudesh2204"
              class="social-icon"
              target="_blank"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2024 Prasad Deshpande. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
