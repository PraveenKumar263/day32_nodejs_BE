const Todo = require('../models/todo');

// Manage your methods within controller
const todoController = {
    createTodo: async (req, res) => {
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
    }
}

module.exports = todoController;