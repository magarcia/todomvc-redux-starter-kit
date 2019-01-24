import React from "react";
import PropTypes from "prop-types";
import TodoTextInput from "./TodoTextInput";

const Header = ({ add }) => (
  <header className="header">
    <h1>todos</h1>
    <TodoTextInput
      newTodo
      onSave={text => {
        if (text.length !== 0) {
          add({ text });
        }
      }}
      placeholder="What needs to be done?"
    />
  </header>
);

Header.propTypes = {
  add: PropTypes.func.isRequired
};

export default Header;
