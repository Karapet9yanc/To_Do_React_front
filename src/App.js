import React, { useEffect, useState } from "react";
import fonImageBody from "../src/image/fonImageBody.jpg";
import axios from "axios";
import "./App.scss";
import MainContainerComponent from "./components/MainContainerComponent/MainContainerComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import SaveAndCancelComponent from "./components/SaveAndCancelComponent/SaveAndCancelComponent";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setTask] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8000/allTasks").then((res) => {
      setTasks(res.data.data);
    });
  }, []);

  return (
    <div>
      <img src={fonImageBody} alt={"logo"} className={"logotip"} />
      <Switch>
        <Route path="/home">
          <MainContainerComponent
            tasks={tasks}
            setTasks={setTasks}
            setTask={setTask}
          />
        </Route>
        <Route path="/edit">
          <SaveAndCancelComponent setTasks={setTasks} task={currentTask} />
        </Route>
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
};

export default App;
