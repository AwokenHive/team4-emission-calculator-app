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

  // Define emission factors for each type of vehicle (in grams per mile)
  const emissionFactors = {
    "Average Car": 411, // This is just an example value
    "Electric Car": 0, // Electric cars produce zero tailpipe emissions
    Van: 269, // This is just an example value
  };

  // Get the emission factor for the selected vehicle type
  let emissionFactor = emissionFactors[vehicleType];

  // If the vehicle is a hybrid, reduce the emission factor by 25%
  if (isHybrid) {
    emissionFactor *= 0.75;
  }

  // Calculate the total emissions (in grams)
  const totalEmissions = distance * emissionFactor;

  // Convert the total emissions to kilograms (optional)
  const totalEmissionsKg = totalEmissions / 1000;

  res.json({ emissions: totalEmissionsKg });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
