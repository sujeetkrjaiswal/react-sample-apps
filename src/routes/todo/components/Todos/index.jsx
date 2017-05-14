import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../../actions/constants';
import TodosComponent from './Todos.component';
import { toggleTodo } from '../../actions';

const getVisibleTodos = (todos, visibilityFilterValue) => {
  switch (visibilityFilterValue) {
    case SHOW_ALL:
      return todos;
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.todosvisibility),
});

const mapDispactchToProps = dispatch => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id));
  },
});

const Todos = withRouter(connect(
  mapStateToProps,
  mapDispactchToProps,
)(TodosComponent));

export default Todos;
