import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text, id }) => (
  <li>
    <input
      id={`checkbox-todo-list-${id}`}
      type="checkbox"
      selected={completed}
      onChange={onClick}
    />
    <label
      htmlFor={`checkbox-todo-list-${id}`}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      {text}
    </label>
  </li>
);

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
