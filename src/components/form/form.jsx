import React, { useRef, useState } from "react";

function Form() {
  const distanceRef = useRef(null);
  const mileageRef = useRef(null);
  const vehicleRef = useRef(null);
  const hybridRef = useRef(null);
  const [result, setResult] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      distance: distanceRef.current.value,
      mileage: mileageRef.current.value,
      vehicleType: vehicleRef.current.value,
      isHybrid: hybridRef.current.checked,
    };

    fetch("http://localhost:3002/calculate-emissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResult(data.emissions);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
            <option value="avCarType">Average Car</option>
            <option value="electricCar">Electric Car</option>
            <option value="vanType">Van</option>
          </select>
        </label>
        <label>
          <p>Is the vehicle a hybrid?</p>
          <input type="checkbox" ref={hybridRef} />
        </label>
        <button type="submit">Calculate your Carbon Footprint</button>
      </form>
      {result && <p>Your carbon footprint is: {result} kg</p>}
    </div>
  );
}

export default Form;
