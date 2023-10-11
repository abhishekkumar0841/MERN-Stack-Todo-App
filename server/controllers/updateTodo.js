const Todos = require("../models/todoModel");

exports.updateTodo = async(req, res)=>{
    const {id, task} = req.body;
    try {
        const todo = await Todos.findByIdAndUpdate({_id: id}, {task})

        return res.status(200).json({
            success: true,
            message: "Todo updated successfully",
            updatedTodo: todo,
        })
        
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: error.message
        })
    }
}