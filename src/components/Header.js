import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
const Header = () => {
  const { tasks } = useContext(TaskListContext);
  const completedTasks = tasks.filter((task) => !task.ischecked).length;
  const uncompleteTasks = tasks.filter((task) => task.ischecked).length;
  return (
    <div className="header">
      <h1>Task Manager</h1>
      <div style={{ display: "flex",width:"90%",marginLeft:"10px",marginBottom:"20px",
  alignItems: "stretch",
  justifyContent: "space-between",}}>
        <span style={{color:"#ccc"}}>Completed Tasks: {completedTasks}</span>
        <span style={{color:"#ccc"}}>Un-Complete Tasks: {uncompleteTasks}</span>
      </div>
    </div>
  );
};

export default Header;
