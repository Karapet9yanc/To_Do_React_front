import React, { useState } from "react";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import "../../App.scss";

const HeaderComponent = ({ tasks, setTasks }) => {
  const [text, setText] = useState("");
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });
  const { open, message } = snackbar;
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
    } else setSnackbar({ open: true, message: "Please fill in all fields" });
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
        <Snackbar
          onClose={() => setSnackbar({ open: false })}
          open={open}
          autoHideDuration={2000}
          message={message}
        />
      </div>
    </header>
  );
};
export default HeaderComponent;
