import React from "react";
import "../App.css";
import "./MenuList.css";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";

function MenuList() {
  return (
    <div className="menu-list-container flex-grow">
      <div className="flex flex-row justify-between items-center">
        <h1 className="header-text menu-title">Small Plates</h1>
        <Link to="/" className="see-all md:hidden">
          See All
        </Link>
      </div>
      <div className="menu-list flex md:flex-wrap inner-scroll">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
}

export default MenuList;
