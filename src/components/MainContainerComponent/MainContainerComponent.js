import React, { useState } from "react";
import EditandDeleteComponent from "../../components/EditandDeleteComponent/EditandDeleteComponent.js";
import HeaderComponent from "../HeaderComponent/HeaderComponent";

const MainContainerComponent = ({ tasks, setTasks, setTask }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HeaderComponent tasks={tasks} setTasks={setTasks} />;
      <div className="tasks">
        {tasks.map((task, index) => (
          <div key={`task-${index}`} className="task">
            <input
              type="checkbox"
              ischeck={task.ischeck}
              key={`task-${index}`}
            />

            <EditandDeleteComponent
              tasks={tasks}
              setTasks={setTasks}
              setOpen={setOpen}
              task={task}
              setTask={setTask}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default MainContainerComponent;
