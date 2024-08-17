// 1. Create a router
const express = require('express');
const todoRouter = express.Router();

const Todo = require('../models/todo');

// Add controller to access methods
const todoController = require('../controller/todoController');

// 2. Add routes to the router

// Post a new todo item
todoRouter.post('/', todoController.createTodo);

// 3. Export the router
module.exports = todoRouter;
