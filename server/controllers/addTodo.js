const Todos = require("../models/todoModel");

exports.addTodo = async (req, res) => {
  try {
    const { task, isCompleted } = req.body;
    const todos = new Todos({
      task,
      isCompleted,
    });

    const saveTodo = await todos.save();
    console.log("save todo->", saveTodo)

    return res.status(200).json({
      success: true,
      message: "Todo Added Successfully",
      todo: saveTodo,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
