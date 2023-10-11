import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/slices/todoSlice";

const TodoBody = () => {
  const [todos, setTodos] = useState([]);
  const [editText, setEditText] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/alltodos");
        const data = await response.json();

        // console.log("Printing Data->" , data);
        // console.log("Printing Data Message->" + data.message);
        // console.log(("All Todos->"+ data.allTodos));
        // console.log(("All Task->" + data.allTodos.task));
        // console.log(("All Status->"+ data.allTodos.isCompleted));

        setTodos(data.allTodos);
        // console.log("After setTodos->", todos);
      } catch (error) {
        console.log("error while getting all todos", error);
      }
    };

    fetchTodos();
  }, [todos]);

  const deleteTodoHandler = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/deletetodo/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();
      dispatch(deleteTodo(data));
    } catch (error) {
      console.log("Error while deleting a todo!");
    }
  };

  const editTodoHandler = (id, currentTask) => {
    setEditTodoId(id);
    setEditText(currentTask);
  };

  const updateTodoHandler = async () => {
    const response = await fetch(
      `http://localhost:3000/api/v1/updatetodo`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id:editTodoId, task: editText }),
      }
    );

    const updatedTodo = await response.json();
    dispatch(updateTodo(updatedTodo));
    setEditTodoId(null);
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo._id}>
          {editTodoId === todo._id ? (
            <form onSubmit={updateTodoHandler}>
              <input autoFocus
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                placeholder="Update your task..."
              />
              <button type="submit">
                Update
              </button>
            </form>
          ) : (
            <div>
              <h1>Task: {todo.task} </h1>
              <span>Completed: {todo.isCompleted.toString()} </span>
              <span onClick={() => deleteTodoHandler(todo._id)}>X</span>
              <span onClick={() => editTodoHandler(todo._id, todo.task)}>
                {" "}
                Edit
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoBody;
