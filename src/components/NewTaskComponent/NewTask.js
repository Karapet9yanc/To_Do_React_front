import React, { useState } from "react";
import axios from "axios";
import "../../App.scss";

const AddTasksComponent = ({ tasks, setTasks }) => {
  const [text, setText] = useState("");
  const addNewTask = async () => {
    if (text.trim()) {
      await axios
        .post("http://localhost:8000/createTask", {
          text,
          isCheck: false,
        })
        .then((res) => {
          setTasks(res.data.data);
          setText("");
        });
    } else {
      alert("Введите задание в поле ввода");
    }
  };

  return (
    <header>
      <h1>To-Do List</h1>
      <div className="section">
        <input
          type="text"
          placeholder="Enter your task..."
          className="form__field"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => addNewTask()}>Add news</button>
      </div>
    </header>
  );
};
export default AddTasksComponent;
