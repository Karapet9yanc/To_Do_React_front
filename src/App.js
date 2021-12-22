import React, { useEffect, useState } from "react";
import fonImageBody from "../src/image/fonImageBody.jpg";
import axios from "axios";
import "./App.scss";
import AddTasksComponent from "./components/NewTaskComponent/NewTask";
import MainContainerComponent from "./components/MainContainerComponent/MainContainerComponent";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/allTasks").then((res) => {
      setTasks(res.data.data);
    });
  }, []);

  return (
    <div>
      <img src={fonImageBody} alt={"logo"} className={"logotip"} />;
      <AddTasksComponent tasks={tasks} setTasks={setTasks} />;
      <MainContainerComponent tasks={tasks} setTasks={setTasks} />;
    </div>
  );
};

export default App;
