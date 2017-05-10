import React from 'react';
import propType from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';

const AddTodoComponent = ({ dispatch }) => {
  let input;
  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </section>
  );
};

AddTodoComponent.propTypes = {
  dispatch: propType.func.isRequired,
};

const AddTodo = connect()(AddTodoComponent);
export default AddTodo;
