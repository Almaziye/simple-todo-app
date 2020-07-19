import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#c5e2d2",
      textDecoration: "line-through",
    };
    return (
      <>
        <li className="todo-item">
          <input
            type="checkbox"
            onChange={() => this.props.handleChange(this.props.todo.id)}
            checked={this.props.todo.completed}
          />
          <span style={this.props.todo.completed ? completedStyle : null}>
            {" "}
            {this.props.todo.title}
          </span>
          <button
            onClick={() => this.props.handleDelete(this.props.todo.id)}
            className="but-style"
          >
            x
          </button>
        </li>
      </>
    );
  }
}
