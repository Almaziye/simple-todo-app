import React, { Component } from "react";
import Header from "../layouts/Header";
import Todos from "./ToDos";
import AddTodo from "./AddTodo";

class TodoApp extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "setup development environment",
        completed: true,
      },
      {
        id: 2,
        title: "Development Website and add content",
        completed: false,
      },
      {
        id: 3,
        title: "Deploy to live serever",
        completed: false,
      },
    ],
  };

  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  handleDelete = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  handleAddtodo = (title) => {
    const newTodo = {
      id: 4,
      title: title,
      completed: false,
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <AddTodo handleAddTodo={this.handleAddTodo} />
        <Todos
          handleDelete={this.handleDelete}
          handleChange={this.handleChange}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default TodoApp;
