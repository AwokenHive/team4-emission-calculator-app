import React, { useRef } from "react";

function Form() {

  function handleSubmit(event) {
    event.preventDefault();
    const unit = getUnit();
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
          <p type="number" ref={distanceRef}></p>
        </label>
        <label>
          <p>CO<sub>2</sub>:</p>
        </label>
        <label>
            <p>Possible CO<sub>2</sub> saved using routes:</p>
            <p>Bus:</p>
            <p>Coach:</p>
            <p>Train:</p>
            <p>Electric Bike:</p>
        </label>
      </form>
    </div>
  );
}

export default Form;
