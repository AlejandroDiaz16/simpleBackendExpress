const express = require("express");
const cors = require("cors");
const app = express();
const todoController = require("./todos/controller");

const PORT = 5000;

app.use(
  cors({
    origin: "http://localhost:3000", // Ensure this is your frontend URL
    methods: "GET,POST,PUT,DELETE", // List all allowed methods
    allowedHeaders: "Content-Type", // Headers your frontend is sending
  })
);

app.use(express.json()); // Enable JSON parsing

// Your routes
app.use("/api", todoController);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
