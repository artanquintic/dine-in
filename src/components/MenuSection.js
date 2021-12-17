import React from "react";
import "../App.css";
import "./MenuSection.css";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import MenuList from "./MenuList";

function MenuSection() {
  // const [showFilterSearch, setShowFilterSearch] = useState(initialState)
  return (
    <div className="menu-container">
      <div className="menu-top flex flex-row justify-evenly md:justify-between transition-all">
        <button className="filter-btn mr-4 bg-white hover:bg-slate-200 block md:hidden">
          <svg
            className="h-8 w-8"
            width="39"
            height="38"
            viewBox="0 0 39 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.25 28.5H22.75V25.3333H16.25V28.5ZM4.875 9.5V12.6667H34.125V9.5H4.875ZM9.75 20.5833H29.25V17.4167H9.75V20.5833Z"
              fill="#EDAC2C"
            />
          </svg>
        </button>
        <div className="flex-grow">
          <SearchBar />
        </div>
        <button className="basket-btn bg-white hover:bg-slate-200 hidden md:block">
          <svg
            class="h-5 w-5 mx-auto"
            width="31"
            height="27"
            viewBox="0 0 31 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.6638 10.3751L16.6413 1.35509C16.5126 1.17297 16.3414 1.02511 16.1424 0.92444C15.9435 0.823771 15.7229 0.773353 15.5 0.77759C15.06 0.77759 14.62 0.970091 14.3588 1.36884L8.33625 10.3751H1.75C0.99375 10.3751 0.375 10.9938 0.375 11.7501C0.375 11.8738 0.38875 11.9976 0.43 12.1213L3.9225 24.8676C4.23875 26.0226 5.2975 26.8751 6.5625 26.8751H24.4375C25.7025 26.8751 26.7613 26.0226 27.0913 24.8676L30.5838 12.1213L30.625 11.7501C30.625 10.9938 30.0063 10.3751 29.25 10.3751H22.6638ZM11.375 10.3751L15.5 4.32509L19.625 10.3751H11.375ZM15.5 21.3751C13.9875 21.3751 12.75 20.1376 12.75 18.6251C12.75 17.1126 13.9875 15.8751 15.5 15.8751C17.0125 15.8751 18.25 17.1126 18.25 18.6251C18.25 20.1376 17.0125 21.3751 15.5 21.3751Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <div className="menu-content flex flex-row justify-center">
        <div className="side-nav hidden lg:block">
          <Filter />
        </div>
        <div className="inner-scroll">
          <MenuList />
          <MenuList />
        </div>
      </div>
    </div>
  );
}

export default MenuSection;
