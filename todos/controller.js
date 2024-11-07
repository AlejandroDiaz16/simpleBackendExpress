const express = require('express')
const router = express.Router();
const { getAllTodos, updateTodosById, deleteTodosById, addTodos} =  require('./service');

// Get all 
router.get("/todos", (req, res) => {
    res.json(getAllTodos());
})

router.post("/todos", (req, res) => {
    res.json(addTodos(req.body))
})

router.put("/todos/:id", (req, res) => {
    res.json(updateTodosById(req.params.id, req.body))
})

router.delete("/todos/:id", (req, res) => {
    res.json(deleteTodosById(req.params.id))
})

module.exports = router;