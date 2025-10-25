import { useState } from "react";

function ToDoList() {
    const [task, setTask] = useState("");  // state for task
    const [list, setList] = useState([]);  // state for list of tasks

    const addTask = () => {
        if (task.trim() === "")
            return;
        setList([...list, task]);
        setTask("");
    }

    return <div className="todo-container">
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={() => addTask()}>Add Task</button>
        <br />
        <h3>Your Tasks:</h3>
        <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
}

export default ToDoList;