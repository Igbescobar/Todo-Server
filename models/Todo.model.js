const { Schema, model } = require("mongoose")

const todoSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    timestamp: {
        type: Date,
        default: Date.now()
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Todo = model('Todo', todoSchema);

module.exports = Todo;
