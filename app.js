// Import express module
const express = require('express');

// Create an express application
const app = express();

// import the db model in the todo.js
const Todo = require('./models/todo');

// use the express middleware for parsing of json bodies
app.use(express.json());

// Define a route handler for the default "GET" request "/"
app.get('/', (request, response) => {
  response.json({message: "Hello World!"});
});

// Post a new todo item
app.post('/api/v1/todos', async (req, res) => {
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

module.exports = app;