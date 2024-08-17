// 1. Create a router
const express = require('express');
const todoRouter = express.Router();

const Todo = require('../models/todo');

// 2. Add routes to the router

// Post a new todo item
todoRouter.post('/', async (req, res) => {
    try {
        // get the description from the request body
        const { description } = req.body;

        // create a new todo
        const newTodo = new Todo({
        description
        });

        // save the todo the DB
        const savedTodo = await newTodo.save();
        res.send({message: 'Todo created successfully', todo: savedTodo}); // send to fronend
    } catch(error) {
        res.status(500).send({message: error.message})
    }
});

// 3. Export the router
module.exports = todoRouter;
