import React, { useState } from "react";
import axios from "axios";
import saveImage from "../../image/save.png";
import closeImage from "../../image/close.png";
const SaveAndCancelComponent = ({ setTasks, setOpen, task, tasks, index }) => {
  const [saveText, setSaveText] = useState("");
  const { text } = task;
  const closeModel = () => {
    setOpen(false);
  };

  const saveTask = async (index) => {
    const { _id, isCheck } = tasks[index];

    if (saveText.trim() !== "") {
      await axios
        .patch("http://localhost:8000/updateTask", {
          _id,
          text: saveText,
          isCheck,
        })
        .then((res) => {
          setTasks(res.data.data);
        });
    } else {
      alert("Изменения не были внесены");
    }
  };

  return (
    <div className="EditeDiv">
      <input
        type="text"
        className="EditeInput"
        defaultValue={text}
        onChange={(e) => setSaveText(e.target.value)}
      />
      <div className="divFunction">
        <button
          className="editeTask"
          onClick={() => {
            saveTask(index);
            setOpen(false);
          }}
        >
          <img src={saveImage} />
        </button>
        <button onClick={() => closeModel()} className="delete">
          <img src={closeImage} />
        </button>
      </div>
    </div>
  );
};
export default SaveAndCancelComponent;
