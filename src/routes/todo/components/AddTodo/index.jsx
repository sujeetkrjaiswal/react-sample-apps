import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addTodo } from '../../actions';


const AddTodoComponent = ({ dispatch }) => {
  let input;
  return (
    <section className="p-t-b-10">
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
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="I want to do ..."
            ref={(node) => {
              input = node;
            }}
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Add Todo</button>
          </span>
        </div>
      </form>
    </section>
  );
};

AddTodoComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const AddTodo = withRouter(connect()(AddTodoComponent));
export default AddTodo;
