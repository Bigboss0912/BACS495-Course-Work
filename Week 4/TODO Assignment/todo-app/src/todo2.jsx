import React, { Component } from "react";

class TODO2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      tasks: [],
    };
  }

  updateTask(event) {
    this.setState({
      task: event.target.value,
    });
  }

  updateTasks() {
    console.log(this.tasks);
    this.setState(prevState => ({
      tasks: [...prevState.tasks, this.task]
    }));
  }

  TaskList = props => {
    return (
      <ul>
        {this.tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
      <form>
        <label>Tasks</label>
        <input
          type="text"
          onChange={this.updateTask, this.updateTasks}
        />
        <button
          type="button"
        >
          Add
        </button>
      </form>
      <div>
        {this.TaskList}
      </div>
    </div>
    );
  }
}

export default TODO2;