import React from "react";
import { Link } from "react-router-dom";

import "../App.css";
import "./Filter.css";

function Filter() {
  return (
    <div className="filter-container inner-scroll">
      <div className="filter-title">
        <h1 className="header-text">Food Selections</h1>
      </div>
      <ul className="filter-items">
        <Link to="/">
          <li>All</li>
        </Link>
        <Link to="/">
          <li>Chef's Picks</li>
        </Link>
        <Link to="/">
          <li className="active">Small Plates</li>
        </Link>
        <Link to="/">
          <li>Large Plates</li>
        </Link>
        <Link to="/">
          <li>Pasta & Pizza</li>
        </Link>
        <Link to="/">
          <li>Sides & Extras</li>
        </Link>
        <Link to="/">
          <li>Desserts</li>
        </Link>
        <Link to="/">
          <li>Ramadan Package</li>
        </Link>
        <Link to="/">
          <li>Ramadan Package</li>
        </Link>
        <Link to="/">
          <li>Ramadan Package</li>
        </Link>
        <Link to="/">
          <li>Ramadan Package</li>
        </Link>
      </ul>
    </div>
  );
}

export default Filter;
