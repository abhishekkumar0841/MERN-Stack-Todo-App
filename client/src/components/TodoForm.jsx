import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

const TodoForm = () => {
  const [textInput, setTextInput] = useState("");

  const dispatch = useDispatch()

  const onTextChange = (e) => {
    setTextInput(e.target.value);
  };

  const onSubmitHandler = async (e)=>{
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/v1/addtodo", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({task: textInput})
      }) 

      const data = await response.json();
      dispatch(addTodo(data))
      setTextInput("")

    } catch (error) {
      console.log("Error while adding todo to database->",error)
    }

  }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Add Your Todo Here..."
          value={textInput}
          onChange={onTextChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
