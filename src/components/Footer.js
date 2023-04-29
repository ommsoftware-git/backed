import React from "react";
import "./Footer.css";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul>
          <li className="nav-item">
            <RouterLink to="/signup">Affiliate program</RouterLink>
          </li>
          <li className="nav-item">
            <Link
              to="faq"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              href="#about"
            >
              Cancellation and refund policy
            </Link>
          </li>
          <li className="nav-item">
            <RouterLink to="/terms">Terms of service</RouterLink>
          </li>
          <li className="nav-item">
            <RouterLink to="/policy">Privacy policy</RouterLink>
          </li>
        </ul>
        <div className="bottom">
          <span className="line"></span>
          <p>2023 Make a Thing, LLC</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
