import React, { useState } from "react";
import { FaBus } from "react-icons/fa";
import { FaTrain } from "react-icons/fa";
import { MdOutlineElectricBike } from "react-icons/md";
import { MdBubbleChart } from "react-icons/md";
import { FaWalking } from "react-icons/fa";
import { MdDirectionsBike } from "react-icons/md";

function FormCalcs() {
  const [distance, setDistance] = useState("");
  const [emissions, setEmissions] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    calculateEmissions();
  }

  const calculateEmissions = () => {
    // Perform emission calculation here
    // For now, let's set emissions to a random value
    const randomEmissions = Math.random() * 100;
    setEmissions(randomEmissions.toFixed(2));
  };

  return (
    <div className="main-container">
      <h1 className="main-heading">Emission Calculator App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Distance Travelled:</p>
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            required
          />
        </label>
        <label>
          <p>
            CO<sub>2</sub> produced: {emissions} kg <MdBubbleChart />
          </p>
        </label>
        <label>
          <p>
            Possible CO<sub>2</sub> saved using routes:
          </p>
          <p>
            <FaBus /> Bus:
          </p>
          <p>
            <FaTrain /> Train:
          </p>
          <p>
            <MdOutlineElectricBike /> Electric Bike:
          </p>
          <p>
            <MdDirectionsBike /> Bike:
          </p>
          <p>
            <FaWalking /> Walk:
          </p>
        </label>
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
}

export default FormCalcs;
