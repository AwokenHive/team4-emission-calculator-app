import React from "react";
import "./navbar.css";
import { IoIosLeaf } from "react-icons/io";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

const leafStyle = {color: "green"}
const carStyle = {width:'250px',height:'250px'}


// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const Navbar = () => {
  return (
    <div className="logo">
      <h1>
        E4 Emissions
        <IoIosLeaf style={leafStyle}/>
      </h1>
      <lord-icon trigger="hover" src="https://cdn.lordicon.com/grcrdebf.json" colors="primary:#ffffff,secondary:#08a88a" style={carStyle}></lord-icon>
      
    </div>
  );
};

export default Navbar;
