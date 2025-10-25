import { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState(""); // state for task
  const [list, setList] = useState([]); // state for list of tasks
  const [num, setNum] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const addTask = () => {
    if (task.trim() === "") return;
    setList([...list, task]);
    setTask("");
  };

  const generateNum = () => {
    setNum(Math.floor(Math.random() * 100)) // generates random number from 0-100
    // Math.random() generated decimal number between 0-1
  }

  return (
    <div className="main">
        <div className="randomNum">
            <button onClick={generateNum}>Generate Random Number</button>
            <p>The random number is {num}</p>
        </div>
        <br />

      <div className="todo-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={() => addTask()}>Add Task</button>
        <br />
        <h3>Your Tasks:</h3>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <br />

      <div className="time">
        <p>Current time: {time}</p>
        <button onClick={() => {setTime(new Date().toLocaleTimeString())}}>Refresh Time</button>
      </div>
    </div>
  );
}

export default ToDoList;
