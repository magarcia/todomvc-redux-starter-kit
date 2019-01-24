import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import TodoTextInput from "./TodoTextInput";

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    edit: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    complete: PropTypes.func.isRequired
  };

  state = {
    editing: false
  };

  handleDoubleClick = () => {
    this.setState({ editing: true });
  };

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.delete({ id });
    } else {
      this.props.edit({ id, text });
    }
    this.setState({ editing: false });
  };

  render() {
    const { todo, complete, delete: deleteTodo } = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput
          text={todo.text}
          editing={this.state.editing}
          onSave={text => this.handleSave(todo.id, text)}
        />
      );
    } else {
      element = (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => complete({ id: todo.id })}
          />
          <label onDoubleClick={this.handleDoubleClick}>{todo.text}</label>
          <button
            className="destroy"
            onClick={() => deleteTodo({ id: todo.id })}
          />
        </div>
      );
    }

    return (
      <li
        className={classnames({
          completed: todo.completed,
          editing: this.state.editing
        })}
      >
        {element}
      </li>
    );
  }
}
