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
  const { distance, vehicleType } = req.body;

  // Define emission factors for each type of vehicle (in grams per mile)
  const emissionFactors = {
    petrolCar: 147.5,
    electricCar: 4.9,
    hybridCar: 147.5, // Adjusted emission factor for hybrid car
  };

  // Get the emission factor for the selected vehicle type
  let emissionFactor = emissionFactors[vehicleType];

  // Calculate the total emissions (in grams)
  const totalEmissions = distance * emissionFactor;

  // Convert the total emissions to kilograms (optional)
  const totalEmissionsKg = totalEmissions / 1000;

  res.json({ emissions: totalEmissionsKg });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
