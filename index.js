// Import express module
const express = require('express');

// Create an express application
const app = express();

// Port number
const port = 3001;

// Define a route handler for the default "GET" request "/"
app.get('/', (request, response) => {
  response.send('Hello World!');
});

// Start the server and list on port 3001
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
})