import React from "react";
import axios from "axios";
import editImage from "../../image/edit.png";
import deleteImage from "../../image/delete.png";
const EditandDeleteComponent = ({ setTasks, setOpen, task }) => {
  const { text } = task;
  const openModel = () => {
    setOpen(true);
  };

  function deleteTaskFunction(_id) {
    axios.delete(`http://localhost:8000/deleteTask?_id=${_id}`).then((res) => {
      setTasks([...res.data.data]);
    });
  }

  return (
    <div className="element">
      <div className="Text">
        <span>{text}</span>
      </div>
      <div className="function" id="FuctionImage">
        <button className="editeTask" onClick={() => openModel(task._id)}>
          <img src={editImage} alt="editeTask" />
        </button>
        <button onClick={() => deleteTaskFunction(task._id)} className="delete">
          <img src={deleteImage} alt={"delete"} />
        </button>
      </div>
    </div>
  );
};
export default EditandDeleteComponent;
