import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <strong><NavLink to="/" className="footer-logo-link"><h1>BookShala</h1></NavLink></strong>
      </div>
      <div className="facilities">
        <div>
          <p>Show some love on social media</p>
          <div className="social-links">
            <a href="https://www.instagram.com/niyati.nehal/" target="_blank">
              <i class="fa-brands fa-instagram " ></i>
            </a>
            <a href="https://github.com/niyatinehal" target="_blank">
              <i class="fa-brands fa-github"  ></i>
            </a>
            <a href="https://twitter.com/niyati_nehal" target="_blank">
              <i class="fa-brands fa-twitter" ></i>
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div>
          <a href="/">Terms & Condition</a>
          <a href="/">Shipping Policy</a>
          <a href="/">Cancellation Policy</a>
          <a href="/">Privacy Policy</a>
        </div>
        <p>
          Copyright <i class="fa-regular fa-copyright"></i> 2023 Glamour. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
