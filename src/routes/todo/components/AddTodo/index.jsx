import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
  dispatch: PropTypes.func.isRequired,
};

const AddTodo = withRouter(connect()(AddTodoComponent));
export default AddTodo;
