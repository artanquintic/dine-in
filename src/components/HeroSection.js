import React from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-content transition-all">
        <h2 className="block md:hidden">WELCOME TO</h2>
        <h1 className="header-text">Masso</h1>
        <p className="mb-1 mt-3 md:mt-6">
          Manama - Bld Number: 404, Road Number: 382 Block Number 338, Adliya
        </p>
        <div className="flex flex-row justify-between">
          <p>
            <svg
              className="h-4 w-4 mr-1 inline-block"
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5002 28.4163C22.6338 28.4163 28.4168 22.6334 28.4168 15.4997C28.4168 8.366 22.6338 2.58301 15.5002 2.58301C8.36649 2.58301 2.5835 8.366 2.5835 15.4997C2.5835 22.6334 8.36649 28.4163 15.5002 28.4163Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.5 7.75V15.5L20.6667 18.0833"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            40-50 mins
          </p>
          <p>BHD 15,000 minimum order</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
