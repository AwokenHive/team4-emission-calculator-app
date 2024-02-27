import React from "react";
import "./navbar.css";
import { IoIosLeaf } from "react-icons/io";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

const leafStyle = { color: "green" };
const carStyle = { width: "200px", height: "200px" };

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const Navbar = () => {
  return (
    <div className="logo">
      <h1>
        EcoEmissions
        <IoIosLeaf style={leafStyle} />
      </h1>

      <div className="icon-container responsive-icon">
        <lord-icon
          trigger="hover"
          src="https://cdn.lordicon.com/grcrdebf.json"
          colors="primary:#000000,secondary:#00ce22"
          stroke="bold"
          style={carStyle}
        ></lord-icon>
      </div>
    </div>
  );
};

export default Navbar;
