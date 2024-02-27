import React, { useState } from "react";
import "./App.css";
import Form from "./components/form/form";
import FormCalcs from "./components/form/formCalcs";
import Navbar from "./components/navbar/navbar";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emissions, setEmissions] = useState(null);
  const [mileage, setUnits] = useState(null);
  const [distance, setDistance] = useState(null);

  const handleFormSubmit = (emissions, distance, mileage) => {
    setEmissions(emissions);
    setDistance(distance);
    setUnits(mileage);
    setIsSubmitted(true);
  };

  return (
    <div className="App">
      <Navbar />
      {!isSubmitted ? (
        <Form onSubmit={handleFormSubmit} />
      ) : (
        <FormCalcs emissions={emissions} distance={distance} mileage={mileage} />
      )}
    </div>
  );
}

export default App;
