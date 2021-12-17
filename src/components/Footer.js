import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer hidden md:block">
      <div className="left-container w-1/2">
        <div className="my-2">
          <Link to="/" className="header-text logo">
            Dine In
          </Link>
        </div>
        <div className="my-4">
          <ul className="flex flex-row justify-between">
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/partner">Partner with Us</Link>
            </li>
            <li>
              <Link to="/join-team">Join Our Team</Link>
            </li>
            <li>
              <Link to="/faqs">FAQs</Link>
            </li>
            <li>
              <Link to="/press">Press</Link>
            </li>
          </ul>
        </div>
        <div className="socials">
          <svg
            width="58"
            height="58"
            viewBox="0 0 58 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.9999 4.92993C15.7082 4.92993 4.83322 15.7808 4.83322 29.1449C4.83322 41.2283 13.6782 51.2574 25.2299 53.0699V36.1533H19.0916V29.1449H25.2299V23.8041C25.2299 17.7383 28.8307 14.4033 34.3649 14.4033C36.9991 14.4033 39.7541 14.8624 39.7541 14.8624V20.8316H36.7091C33.7124 20.8316 32.7699 22.6924 32.7699 24.6016V29.1449H39.4882L38.4007 36.1533H32.7699V53.0699C38.4646 52.1705 43.6502 49.2649 47.3905 44.8776C51.1309 40.4902 53.1795 34.9102 53.1665 29.1449C53.1665 15.7808 42.2916 4.92993 28.9999 4.92993Z"
              fill="white"
            />
          </svg>

          <svg
            width="58"
            height="58"
            viewBox="0 0 58 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.9998 21.4496C24.8424 21.4496 21.4496 24.8424 21.4496 28.9998C21.4496 33.1573 24.8424 36.55 28.9998 36.55C33.1572 36.55 36.55 33.1573 36.55 28.9998C36.55 24.8424 33.1572 21.4496 28.9998 21.4496ZM51.6447 28.9998C51.6447 25.8733 51.6731 22.775 51.4975 19.6541C51.3219 16.0291 50.4949 12.8119 47.8442 10.1612C45.1877 7.50471 41.9762 6.68342 38.3512 6.50784C35.2246 6.33225 32.1264 6.36057 29.0055 6.36057C25.8789 6.36057 22.7807 6.33225 19.6598 6.50784C16.0348 6.68342 12.8176 7.51038 10.1668 10.1612C7.51037 12.8176 6.68908 16.0291 6.5135 19.6541C6.33791 22.7807 6.36623 25.8789 6.36623 28.9998C6.36623 32.1207 6.33791 35.2246 6.5135 38.3455C6.68908 41.9705 7.51604 45.1877 10.1668 47.8385C12.8233 50.4949 16.0348 51.3162 19.6598 51.4918C22.7863 51.6674 25.8846 51.6391 29.0055 51.6391C32.132 51.6391 35.2303 51.6674 38.3512 51.4918C41.9762 51.3162 45.1934 50.4893 47.8442 47.8385C50.5006 45.1821 51.3219 41.9705 51.4975 38.3455C51.6787 35.2246 51.6447 32.1264 51.6447 28.9998ZM28.9998 40.6168C22.5711 40.6168 17.3828 35.4285 17.3828 28.9998C17.3828 22.5711 22.5711 17.3828 28.9998 17.3828C35.4285 17.3828 40.6168 22.5711 40.6168 28.9998C40.6168 35.4285 35.4285 40.6168 28.9998 40.6168ZM41.0926 19.6201C39.5916 19.6201 38.3795 18.408 38.3795 16.9071C38.3795 15.4061 39.5916 14.194 41.0926 14.194C42.5936 14.194 43.8057 15.4061 43.8057 16.9071C43.8061 17.2635 43.7363 17.6165 43.6001 17.9458C43.4639 18.2752 43.2641 18.5745 43.012 18.8265C42.76 19.0785 42.4607 19.2783 42.1314 19.4145C41.802 19.5507 41.449 19.6206 41.0926 19.6201Z"
              fill="white"
            />
          </svg>
        </div>
        <hr className="my-4" />
        <div>
          <ul className="flex flex-row justify-between">
            <li>
              <Link to="/about-us">Wellness Policy</Link>
            </li>
            <li>
              <Link to="/partner">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/join-team">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-container w-1/2">
        <h2>Get the latest from DINE IN</h2>
        <div className="subscribe">
          <input
            className="subscribe-input mr-4"
            type="text"
            placeholder="YOUR EMAIL ADDRESS"
          />
          <button className="subscribe-btn">SUBSCRIBE</button>
        </div>
        <div className="footer-details">
          <p className="my-2">customerservice@dinein.me</p>
          <p>We are located in Seef District, Manama, Bahrain</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
