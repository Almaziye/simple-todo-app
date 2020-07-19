import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventyDefault();
    this.props.handleAddTodo(this.state.title);
    this.setState({
      title: "",
    });
  };
  render() {
    return (
      <form action="" className="form-container" onSubmit={this.onSubmit}>
        <input
          name="title"
          type="text"
          value={this.state.title}
          className="input-text"
          placeholder="Add todo...."
          onChange={this.onChange}
        />
        <input type="submit" value="submit" className="input-button" />
      </form>
    );
  }
}
export default AddTodo;
