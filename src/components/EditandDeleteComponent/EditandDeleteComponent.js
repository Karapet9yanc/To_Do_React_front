import React from "react";
import axios from "axios";
import editImage from "../../image/edit.png";
import deleteImage from "../../image/delete.png";
import { useHistory } from "react-router-dom";

const EditandDeleteComponent = ({ setTasks, setOpen, task, setTask }) => {
  const { _id, isCheck, text } = task;
  const history = useHistory();

  const openModel = () => {
    setOpen(true);
  };

  const deleteTaskFunction = (_id) => {
    axios.delete(`http://localhost:8000/deleteTask?_id=${_id}`).then((res) => {
      setTasks([...res.data.data]);
    });
  };

  const editTask = () => {
    setTask(task);
    history.push(`/edit/${_id}`);
  };

  return (
    <div className="element">
      <div className="text">
        <span>{text}</span>
      </div>

      <div className="function" id="fuction-image">
        <button
          className="edite-task"
          onClick={() => {
            editTask();
            openModel(task);
          }}
        >
          <img src={editImage} alt="edite-task" />
        </button>

        <button onClick={() => deleteTaskFunction(_id)} className="delete">
          <img src={deleteImage} alt={"delete"} />
        </button>
      </div>
    </div>
  );
};
export default EditandDeleteComponent;
