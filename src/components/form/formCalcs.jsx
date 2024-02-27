import React from "react";
import { FaBus, FaTrain, FaWalking } from "react-icons/fa";
import { MdOutlineElectricBike, MdDirectionsBike } from "react-icons/md";

function calculateEmissions(distance, mileage, emissionFactor) {
  const distanceInKm = mileage === "km" ? distance : distance / 0.621371;
  return (distanceInKm * emissionFactor) / 1000;
}

function FormCalcs({ emissions, distance, mileage }) {
  const busEmissions = calculateEmissions(distance, mileage, 101);
  const trainEmissions = calculateEmissions(distance, mileage, 41);
  const eBikeEmissions = calculateEmissions(distance, mileage, 14.8);
  const bikeEmissions = calculateEmissions(distance, mileage, 21);
  const walkEmissions = calculateEmissions(distance, mileage, 56);

  return (
    <div className="main-container">
      <h1 className="main-heading">Emission Calculator App</h1>
      <form className="form">
        <label>
          <p>
            Distance Travelled: {distance} {mileage}
          </p>
        </label>
        <label>
          <p>
            CO<sub>2</sub> produced: {emissions} kg
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
