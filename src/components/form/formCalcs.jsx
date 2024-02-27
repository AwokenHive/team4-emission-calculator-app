// formCalcs.jsx
import React from "react";
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
  const busEmissions = EmissionsCalculatorBus(distance, mileage);
  const trainEmissions = EmissionsCalculatorTrain(distance, mileage);
  const eBikeEmissions = EmissionsCalculatorEBike(distance, mileage);
  const bikeEmissions = EmissionsCalculatorBike(distance, mileage);
  const walkEmissions = EmissionsCalculatorWalk(distance, mileage);

  return (
    <div className="main-container">
      <h1 className="main-heading">Emission Calculator App</h1>
      <form>
        <label>
          <p>
            Distance Travelled: {distance} {mileage}
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
            <FaBus /> Bus: {busEmissions.toFixed(2)} kg
          </p>
          <p>
            <FaTrain /> Train: {trainEmissions.toFixed(2)} kg
          </p>
          <p>
            <MdOutlineElectricBike /> Electric Bike: {eBikeEmissions.toFixed(2)}{" "}
            kg
          </p>
          <p>
            <MdDirectionsBike /> Bike: {bikeEmissions.toFixed(2)} kg
          </p>
          <p>
            <FaWalking /> Walk: {walkEmissions.toFixed(2)} kg
          </p>
        </label>
      </form>
    </div>
  );
}

export default FormCalcs;
