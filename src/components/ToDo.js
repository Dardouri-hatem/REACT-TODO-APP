import React, { Component } from "react";
import "./ToDoStyle.css";

class ToDo extends Component {
  render() {
    return (
      <div className="list-todo">
        <ul className="to-do">
          {this.props.items.map((currentItem, i) => (
            <li key={i}>
              <button
                className="complete-btn"
                onClick={() => this.props.handleDid(i)}
              >
                {" "}
                {currentItem.done ? " Undo " : " Complete "}
              </button>
              <button
                className="delete-btn"
                onClick={() => this.props.Remove(i)}
              >
                Delete
              </button>
              <span className={currentItem.done ? "item text-line" : "item"}>
                {currentItem.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDo;
