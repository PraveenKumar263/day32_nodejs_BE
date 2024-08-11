// To create a model/schema

// Step 1: import mongoose
const mongoose = require('mongoose')

// Step 2: create a schema
// This is object schema to create in DB
const todoScehma = new mongoose.Schema({
    description: String,
    status: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Step 3: export create model
// arg1 is the model name
// arg2 is the schema
// arg3 is collection name
module.exports = mongoose.model('Todo', todoScehma, 'todos');