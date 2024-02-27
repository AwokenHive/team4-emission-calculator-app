import "./App.css";
import { useRef } from "react";

function App() {
  const distanceRef = useRef(null);
  const selectRef = useRef(null);
  const hybridRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Distance value:", distanceRef.current.value);
    console.log("Select value:", selectRef.current.value);
    console.log("Hybrid value:", hybridRef.current.checked);
  }

  return (
    <div className="main-container">
      <h1 className="main-heading">Team 4 - Emission Calculator App</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <p>Distance Traveled:</p>
          <input type="number" ref={distanceRef} required />
        </label>
        <label>
          <p>Mileage:</p>
          <select ref={selectRef}>
            <option value="miles">miles</option>
            <option value="km">km</option>
          </select>
        </label>
        <label>
          <p>Choose Vehicle:</p>
          <select ref={selectRef}>
            <option value="avCarType">Average Car, Van and Motorbike</option>
          </select>
        </label>
        <label>
          <p>Is the vehicle a hybrid?</p>
          <input type="checkbox" ref={hybridRef} />
        </label>
        <button type="submit">Calculate your Carbon Footprint</button>
      </form>
    </div>
  );
}

export default App;
