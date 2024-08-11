const todos = [
  {
    "createdAt": "2024-08-09T23:27:56.923Z",
    "description": "c[}|mj[maf",
    "status": true,
    "id": "1"
  },
  {
    "createdAt": "2024-08-09T15:32:23.829Z",
    "description": "orqGCyaSIM",
    "status": false,
    "id": "2"
  },
  {
    "createdAt": "2024-08-10T09:25:53.881Z",
    "description": "/Q\\JLlWqSI",
    "status": true,
    "id": "3"
  },
  {
    "createdAt": "2024-08-09T11:39:58.335Z",
    "description": "qM#B'u-ha,",
    "status": false,
    "id": "4"
  },
  {
    "createdAt": "2024-08-09T11:25:09.967Z",
    "description": "4D@Llg#I5'",
    "status": true,
    "id": "5"
  }
];

// Import express module
const express = require('express');

// Create an express application
const app = express();

// use the express middleware for parsing of json bodies
app.use(express.json());

// Port number
const port = 3001;

// Define a route handler for the default "GET" request "/"
app.get('/api/v1/todos', (request, response) => {
  response.send(todos);
});

app.get('/api/v1/todos/:id', (request, response) => {
  const id = request.params.id;
  const todo = todos.find(todo => todo.id === id);
  response.json(todo);
})

app.post('/api/v1/todos', (request, response) => {
  const todo = request.body;
  todos.push(todo);
  response.json(todo);
})
// Start the server and list on port 3001
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
})