// Import express module
const express = require('express');

// MVC (model, view, controller) logic here is translated as models, routes and controller
// Create an express application
const app = express();

// import the db model in the todo.js
const Todo = require('./models/todo');
const todoRouter = require('./routes/todoRoutes');

// use the express middleware for parsing of json bodies
// The 'use' is a middleware function
app.use(express.json());

// Define a route handler for the default "GET" request "/"
app.get('/', (request, response) => {
  response.json({message: "Hello World!"});
});

// Post a new todo item
// Here the '/api/v1/todos' is the prefix,
// which will be combined with the todoRouter rotuer.
// e.g for this it will be /api/v1/todos/ for the POST(in todoRotues.js)
app.use('/api/v1/todos', todoRouter);

// Export the app
module.exports = app;