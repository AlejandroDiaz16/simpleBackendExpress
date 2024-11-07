const express = require('express');
const app = express();
const todoController = require("./todos/controller")

const PORT = 5000;

app.use(express.json());

// use todo routes
app.use("/api", todoController);


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))