import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 120) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
    console.log(colorChange);
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <nav className={colorChange ? "navbar bg-change" : "navbar"}>
        <div className="container flex flex-row m-8 justify-between">
          <div className="flex-grow text-center md:text-left">
            <Link to="/" className="header-text nav-logo transition-all">
              Dine In
            </Link>
          </div>
          <div className="hidden md:block w-auto">
            <ul className="flex flex-row font-normal">
              <li className="nav-item">
                <Link to="/book-a-chef" className="nav-links">
                  Book a Chef
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/partner" className="nav-links">
                  Partner with Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/faqs" className="nav-links">
                  FAQs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-links">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
