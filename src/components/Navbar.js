import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./images/logo.png";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar ">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              How it works
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="customer-purchase"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Customer purchases
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="faq"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
            >
              Faq
            </Link>
          </li>

          <li className="nav-button ">
            <RouterLink to="/start-generating-art">
              Start generating art
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
