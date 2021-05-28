import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = () => {
  const { addTask, clearList, editItem, editTask } =
    useContext(TaskListContext);
  const [title, setTitle] = useState("");
  const [dateTime, setDatetime] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDate = (e) => {
    setDatetime(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title, dateTime);
      setTitle("");
      setDatetime("");
    } else {
      editTask(editItem.id, title, dateTime, editItem.ischecked);
    }
  };
  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      setDatetime(editItem.datetime);
    } else {
      setTitle("");
      setDatetime("");
    }
  }, [editItem]);
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        onChange={handleChange}
        type="text"
        value={title}
        className="task-input"
        placeholder="Add Task . . . "
        required
      />
      <input
        type="datetime-local"
        onChange={handleDate}
        className="task-input"
        value={dateTime}
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          {editItem ? "Update Task" : "Add Task"}
        </button>
        <button onClick={clearList} className="btn clear-btn">
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
