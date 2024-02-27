import React, { useRef } from "react";
import { FaBus } from "react-icons/fa";
import { FaTrain } from "react-icons/fa6";
import { MdOutlineElectricBike } from "react-icons/md";
import { MdBubbleChart } from "react-icons/md";
import { FaWalking } from "react-icons/fa";
import { MdDirectionsBike } from "react-icons/md";

function FormCalcs() {

  function handleSubmit(event) {
    event.preventDefault();
    const unit = getUnit();
  }
  const getUnit = () => {
  };

  return (
    <div className="main-container">
      <h1 className="main-heading">Emission Calculator App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Distance Travelled:</p>
          <p type="number"></p>
        </label>
        <label>
          <p>CO<sub>2</sub> produced: <div value="CO2"></div><MdBubbleChart/></p>
        </label>
        <label>
            <p>Possible CO<sub>2</sub> saved using routes:</p>
            <p><FaBus/> Bus:</p>
            <p><FaTrain/> Train:</p>
            <p><MdOutlineElectricBike/> Electric Bike:</p>
            <p><MdDirectionsBike/> Bike:</p>
            <p><FaWalking/> Walk:</p>
        </label>
      </form>
    </div>
  );
}

export default FormCalcs;
