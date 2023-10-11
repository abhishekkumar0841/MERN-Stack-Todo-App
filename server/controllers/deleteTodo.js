const Todos = require('../models/todoModel');

exports.deleteTodo = async (req, res)=>{
    const {id} = req.params;
try {
    const todo = await Todos.findByIdAndDelete({_id: id})
    return res.status(200).json({
        success: true,
        message: "Todo Deleted Successfully",
        deletedTodo: todo,
    })
} catch (error) {
    return res.status(400).json({
        success: false,
        message: error.message
    })
}
}