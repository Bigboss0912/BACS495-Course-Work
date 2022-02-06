import React, {useState} from "react";

function TODO() {
  
  const [task, setTask] = useState('');
  const tasks = [];

  const addTask = (e) => {
    setTask(e.target.value);
    tasks.push(<li>{task}</li>);
  }

  return (
    <div>
      <form>
        <label>Tasks</label>
        <input
          onChange={addTask}
          value={task}
          type="text"
        />
        <button
          type="submit"
        >
          Submit
        </button>
      </form>
      <div>
        <ul>
          for (let i = 0; i < array tasks.length; index++) {
            <div>{tasks[i]}</div>
          }
        </ul>
      </div>
    </div>
  );
}

export default TODO;