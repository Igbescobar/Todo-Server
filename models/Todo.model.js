const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending'
    },
    timestamp: {
        type: String,
        default: Date.now()
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
