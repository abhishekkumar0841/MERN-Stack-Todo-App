const mongoose = require('mongoose')

const todoModel = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model("Todos", todoModel)