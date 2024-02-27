const express = require("express");
const app = express();
const cors = require("cors");
const port = 3002;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow session cookie from browser to pass through
  })
);

app.post("/calculate-emissions", (req, res) => {
  const { distance, mileage, vehicleType, isHybrid } = req.body;

  // Convert vehicleType to lowercase
  const vehicleTypeLowerCase = vehicleType.toLowerCase();

  // Define emission factors for each type of vehicle (in grams per mile)
  const emissionFactors = {
    petrolcar: 147.5, // Make sure keys are lowercase
    electriccar: 4.9,
    hybridcar: 147.5, // Adjusted emission factor for hybrid car
  };

  // Get the emission factor for the selected vehicle type
  let emissionFactor = emissionFactors[vehicleTypeLowerCase];

  console.log("Emission factor:", emissionFactor); // Log emission factor

  // If the vehicle is a hybrid, reduce the emission factor by 25%
  if (isHybrid) {
    emissionFactor *= 0.75;
  }

  // Calculate the total emissions (in grams)
  const totalEmissions = distance * emissionFactor;

  console.log("Total emissions (g):", totalEmissions); // Log total emissions

  // Convert the total emissions to kilograms (optional)
  const totalEmissionsKg = totalEmissions / 1000;

  console.log("Total emissions (kg):", totalEmissionsKg); // Log total emissions in kg

  res.json({ emissions: totalEmissionsKg });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
