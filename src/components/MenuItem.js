import React from "react";
import { Link } from "react-router-dom";
import "./MenuItem.css";
import salad from "../images/avocado_salad.jpg";

function MenuItem() {
  return (
    <div className="menu-item-container">
      <Link
        to="/"
        className="menu-item flex flex-col md:flex-row transition-all"
      >
        <img className="menu-img" src={salad} alt="Avocado Salad" />
        <div className="menu-item-details flex flex-col justify-center">
          <p className="header-text item-name mb-2">Avocado Salad</p>
          <p>BHD 4.800</p>
        </div>
      </Link>
    </div>
  );
}

export default MenuItem;
