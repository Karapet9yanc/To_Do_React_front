import React, { useState } from "react";
import SaveAndCancelComponent from "../../components/SaveAndCancelComponent/SaveAndCancelComponent";
import EditandDeleteComponent from "../../components/EditandDeleteComponent/EditandDeleteComponent.js";

const MainContainerComponent = ({ tasks, setTasks, task }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="Tasks">
      {tasks.map((task, index) => (
        <div key={`task-${index}`} className="task">
          <input type="checkbox" ischeck={task.ischeck} key={`task-${index}`} />
          {open ? (
            <SaveAndCancelComponent
              setTasks={setTasks}
              setOpen={setOpen}
              task={task}
              tasks={tasks}
              index={index}
            />
          ) : (
            <EditandDeleteComponent
              tasks={tasks}
              setTasks={setTasks}
              setOpen={setOpen}
              task={task}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default MainContainerComponent;
