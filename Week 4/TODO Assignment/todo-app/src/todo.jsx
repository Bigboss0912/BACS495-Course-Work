import React, {useState} from "react";

function TODO() {
  
  const [task, setTask] = useState('');
  const tasks = [];

  const addTask = (e) => {
    setTask(e.target.value);
    tasks.push(task);
    console.log(task);
  }

  const TaskList = props => {
    return (
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <form>
        <label>Tasks</label>
        <input
          type="text"
        />
        <button
          type="submit"
          onClick={addTask}
        >
          Add
        </button>
      </form>
      <div>
        <TaskList />
      </div>
    </div>
  );
}

export default TODO;