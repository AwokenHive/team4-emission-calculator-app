import "./App.css";
import { useRef } from "react";

function App() {
  const selectRef = useRef(null);
  const checkboxRef = useRef(null);
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Input value:", inputRef.current.value);
    console.log("Select value:", selectRef.current.value);
    console.log("Checkbox value:", checkboxRef.current.checked);
  }

  return (
    <div className="main-container">
      <h1 className="main-heading">Team 4 - Emission Calculator App</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <p>Name:</p>
          <input ref={inputRef} type="text" />
        </label>
        <label>
          <p>Favorite color:</p>
          <select ref={selectRef}>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </label>
        <label>
          Do you like React?
          <input type="checkbox" ref={checkboxRef} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
