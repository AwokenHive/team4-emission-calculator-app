const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.use(express.json());

app.post("/calculate-emissions", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

