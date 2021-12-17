import React from "react";
import "../App.css";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-container flex flex-row">
      <svg
        className="h-5 w-5 search-icon fill-current"
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.7106 20.7074L28.7782 26.7736L26.7736 28.7782L20.7074 22.7106C18.4503 24.52 15.6428 25.5041 12.75 25.5C5.712 25.5 0 19.788 0 12.75C0 5.712 5.712 0 12.75 0C19.788 0 25.5 5.712 25.5 12.75C25.5041 15.6428 24.52 18.4503 22.7106 20.7074ZM19.8688 19.6563C21.6667 17.8073 22.6707 15.3289 22.6667 12.75C22.6667 7.27033 18.2283 2.83333 12.75 2.83333C7.27033 2.83333 2.83333 7.27033 2.83333 12.75C2.83333 18.2283 7.27033 22.6667 12.75 22.6667C15.3289 22.6707 17.8073 21.6667 19.6563 19.8688L19.8688 19.6563Z"
          fill="#EDAC2C"
        />
      </svg>

      <input
        className="search-input flex-grow md:flex-grow-0 transition-all"
        type="search"
        name="search"
        placeholder="What’s your craving?"
      ></input>
    </div>
  );
}

export default SearchBar;
