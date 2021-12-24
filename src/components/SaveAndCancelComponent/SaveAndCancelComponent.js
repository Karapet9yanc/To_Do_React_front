import React, { useState } from "react";
import axios from "axios";
import saveImage from "../../image/save.png";
import closeImage from "../../image/close.png";
import { useHistory } from "react-router";
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import Snackbar from "@mui/material/Snackbar";

const SaveAndCancelComponent = ({ setTasks, task }) => {
  const [saveText, setSaveText] = useState("");
  const { _id, text, isCheck } = task;
  const history = useHistory();
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });
  const { open, message } = snackbar;

  const saveTask = async (task) => {
    if (saveText.trim() !== "") {
      await axios
        .patch("http://localhost:8000/updateTask", {
          _id,
          text: saveText,
          isCheck,
        })
        .then((res) => {
          setTasks(res.data.data);
          history.push("/home");
        });
    } else {
      setSnackbar({ open: true, message: "Please fill in all fields" });
    }
  };
  const backToHomePage = () => {
    history.push("/home");
  };

  return (
    <div className="edite-div">
      <HeaderComponent />
      <div className="edite-save-div">
        <input
          type="text"
          className="edite-input"
          defaultValue={text}
          onChange={(e) => setSaveText(e.target.value)}
        />
        <div className="div-function">
          <button
            className="edite-task"
            onClick={() => {
              saveTask(task);
            }}
          >
            <img src={saveImage} alt={"save"} />
          </button>
          <button className="delete" onClick={() => backToHomePage()}>
            <img src={closeImage} alt="save" />
          </button>
        </div>
        <Snackbar
          onClose={() => setSnackbar({ open: false })}
          open={open}
          autoHideDuration={2000}
          message={message}
        />
      </div>
    </div>
  );
};
export default SaveAndCancelComponent;
