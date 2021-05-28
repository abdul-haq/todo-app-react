import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";

const Task = ({ task }) => {
  const { removeTask, taskToggle, findItem } = useContext(TaskListContext);
  const [datee, timee] = task.datetime.split("T");
  return (
    <li className="list-item" onDoubleClick={() => taskToggle(task.id)}>
      {task.ischecked ? (
        <s style={{ color: "red" }}>
          {" "}
          <span style={{ textTransform: "capitalize" }}>
            {task.title}
            <br />
            <small>
              Date: {datee} | Time: {timee}
            </small>
          </span>
        </s>
      ) : (
        <span style={{ textTransform: "capitalize" }}>
          {task.title}
          <br />
          <small>
            Date: {datee} | Time: {timee}
          </small>
        </span>
      )}

      <div>
        <button
          onClick={() => removeTask(task.id)}
          className="btn-delete task-btn"
        >
          <i className="fas fa-trash-alt"></i>
        </button>
        <button onClick={() => findItem(task.id)} className="btn-edit task-btn">
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  );
};

export default Task;
