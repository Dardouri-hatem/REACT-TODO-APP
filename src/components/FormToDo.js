import React, { Component } from "react";
import "./ToDoStyle.css";
import ToDo from "./ToDo";

class FormToDo extends Component {
  state = {
    input: "",
    items: []
  };

  handleUpdateInput = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleAddItem = e => {
    e.preventDefault();
    this.state.input &&
      this.setState({
        items: this.state.items.concat({
          text: this.state.input,
          done: false,
          class: "did-it"
        }),

        input: ""
      });
  };

  handleDid = id => {
    this.setState({
      items: this.state.items.map((item, i) =>
        i === id ? { ...item, done: !item.done } : item
      )
    });
  };

  handleRemove = id => {
    this.setState({
      items: this.state.items.filter((el, i) => i !== id)
    });
  };

  render() {
    return (
      <div>
        <form className="container" onSubmit={this.handleAddItem}>
          <h1>To-Do App!</h1>
          <h3>add new To-Do</h3>
          <input
            className="txt"
            type="text"
            value={this.state.input}
            placeholder="Enter new task"
            onChange={this.handleUpdateInput}
          />
          <button id="add-btn" onClick={this.handleAddItem}>
            Add
          </button>
        </form>
        <p className="paragraph">Let's get some work done</p>
        <ToDo
          Remove={this.handleRemove}
          items={this.state.items}
          handleDid={this.handleDid}
        />
      </div>
    );
  }
}

export default FormToDo;
