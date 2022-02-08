import React, { Component } from "react";
import './todo.css';

class TODO extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usrInput: '',
      tasks: [],
    };
  }

  updateInput(value) {
    this.setState({
      usrInput: value,
    });
  }

  updateTasks() {

    if(this.state.usrInput !== '') {
      const usrInput = {
        value: this.state.usrInput
      };

      const tasks = [...this.state.tasks];
      tasks.push(usrInput);

      this.setState({
        tasks,
        usrInput:''
      });
    }
  }

  TaskList() {

    const tasks = [...this.state.tasks];
    
    return tasks.map((task) => <li key={task}>{task}</li>);
  }

  render() {
    return (
      <div>
      <form>
        <label>To Do List</label>
        <br></br>
        <input
          type="text"
          onChange = {item => this.updateInput(item.target.value)}
        />
        <button
          type="reset"
          onClick = {()=>this.updateTasks()}
        >
          Add
        </button>
      </form>
      <div>
        <table id="todoTable">
          <tr>
            <th>Tasks</th>
            <th>Status</th>
          </tr>
          {this.state.tasks.map(item => {
          return(
            <tr>
              <th className="taskTable">{item.value}</th>
              <th><input type="checkbox"/></th>
            </tr>
          )})}
        </table>
      </div>
    </div>
    );
  }
}

export default TODO;