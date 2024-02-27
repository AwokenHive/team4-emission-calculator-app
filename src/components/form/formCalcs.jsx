import React, { useState } from "react";
import { FaBus } from "react-icons/fa";
import { FaTrain } from "react-icons/fa";
import { MdOutlineElectricBike } from "react-icons/md";
import { MdBubbleChart } from "react-icons/md";
import { FaWalking } from "react-icons/fa";
import { MdDirectionsBike } from "react-icons/md";

function EmissionsCalculatorBus(distance, mileage) {
  if (mileage === "km") return (distance * 101) / 1000;
  else return ((distance / 0.621371) * 101) / 1000;
}

function EmissionsCalculatorTrain(distance, mileage) {
  if (mileage === "km") return (distance * 41) / 1000;
  else return ((distance / 0.621371) * 41) / 1000;
}
function EmissionsCalculatorEBike(distance, mileage) {
  if (mileage === "km") return (distance * 14.8) / 1000;
  else return ((distance / 0.621371) * 14.8) / 1000;
}
function EmissionsCalculatorBike(distance, mileage) {
  if (mileage === "km") return (distance * 21) / 1000;
  else return ((distance / 0.621371) * 21) / 1000;
}
function EmissionsCalculatorWalk(distance, mileage) {
  if (mileage === "km") return (distance * 56) / 1000;
  else return ((distance / 0.621371) * 56) / 1000;
}

function FormCalcs({ emissions, distance, mileage }) {
  function handleSubmit(event) {
    event.preventDefault();
  }
  document.getElementById("bus").textContent = EmissionsCalculatorBus(
    distance,
    mileage
  ).toFixed(2);
  document.getElementById("train").textContent = EmissionsCalculatorTrain(
    distance,
    mileage
  ).toFixed(2);
  document.getElementById("ebike").textContent = EmissionsCalculatorEBike(
    distance,
    mileage
  ).toFixed(2);
  document.getElementById("bike").textContent = EmissionsCalculatorBike(
    distance,
    mileage
  ).toFixed(2);
  document.getElementById("walk").textContent = EmissionsCalculatorWalk(
    distance,
    mileage
  ).toFixed(2);

  return (
    <div className="main-container">
      <h1 className="main-heading">Emission Calculator App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>
            Distance Travelled:{distance}
            {mileage}
          </p>
        </label>
        <label>
          <p>
            CO<sub>2</sub> produced: {emissions} kg <MdBubbleChart />
          </p>
        </label>
        <label>
          <p>
            Possible CO<sub>2</sub> produced using routes:
          </p>
          <p>
            <FaBus /> Bus: <p id="bus">{distance} </p>
          </p>
          <p>
            <FaTrain /> Train: <p id="train"> {distance}</p>
          </p>
          <p>
            <MdOutlineElectricBike /> Electric Bike:{" "}
            <p id="ebike">{distance} </p>
          </p>
          <p>
            <MdDirectionsBike /> Bike: <p id="bike">{distance} </p>
          </p>
          <p>
            <FaWalking /> Walk: <p id="walk">{distance} </p>
          </p>
        </label>
      </form>
    </div>
  );
}

export default FormCalcs;
