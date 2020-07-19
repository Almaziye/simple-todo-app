import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Todos extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              handleChange={this.props.handleChange}
              handleDelete={this.props.handleDelete}
              todo={todo}
            ></TodoItem>
          );
        })}
      </div>
    );
  }
}
export default Todos;
