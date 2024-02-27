import React from "react";
import "./navbar.css";
import { IoIosLeaf } from "react-icons/io";

const leafStyle = {color: "green"}

const Navbar = () => {
  return (
    <div className="logo">
      <h1>E4 Emissions<IoIosLeaf style={leafStyle}/></h1>
    </div>
  );
};

export default Navbar;
