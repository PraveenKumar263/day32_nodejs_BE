// Import express module
const express = require('express');

// Create an express application
const app = express();

// use the express middleware for parsing of json bodies
app.use(express.json());

// Port number
const port = 3001;

// Define a route handler for the default "GET" request "/"
app.get('/', (request, response) => {
  response.json({message: "Hello World!"});
});

module.exports = app;