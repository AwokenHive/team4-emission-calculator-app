import React, { useRef } from "react";

function Form() {
  const distanceRef = useRef(null);
  const mileageRef = useRef(null);
  const vehicleRef = useRef(null);
  const hybridRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const unit = getUnit();
    console.log("Distance value:", distanceRef.current.value);
    console.log("Mileage unit:", unit);
    console.log("Vehicle type:", vehicleRef.current.value);
    console.log("Hybrid value:", hybridRef.current.checked);
  }

  const getUnit = () => {
    return mileageRef.current.value;
  };

  return (
    <div className="main-container">
      <h1 className="main-heading">Emission Calculator App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Distance Travelled:</p>
          <input type="number" ref={distanceRef} required />
        </label>
        <label>
          <p>Mileage:</p>
          <select ref={mileageRef}>
            <option value="miles">miles</option>
            <option value="km">km</option>
          </select>
        </label>
        <label>
          <p>Choose Vehicle:</p>
          <select ref={vehicleRef}>
          <option value="petrolCar">Petrol Car</option>
            <option value="electricCar">Electric Car</option>
            <option value="hybridCar">Hybrid Car</option>
          </select>
        </label>
        <button type="submit">Calculate your Carbon Footprint</button>
      </form>
    </div>
  );
}

export default Form;
