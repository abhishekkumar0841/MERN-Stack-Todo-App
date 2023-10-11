const Todos = require("../models/todoModel");

exports.getTodos = async(req, res)=>{
    try {
        const todos = await Todos.find({})

        return res.status(200).json({
            success: true,
            message: "All Todos get Successfully",
            allTodos: todos,
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

