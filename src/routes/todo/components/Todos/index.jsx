import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  APP_KEY_STORE,
  APP_KEY_TODOS,
  APP_KEY_VISIBILITY,
  FILTER_SHOW_ALL,
  FILTER_SHOW_ACTIVE,
  FILTER_SHOW_COMPLETED,
} from '../../actions/constants';
import TodosComponent from './Todos.component';
import { toggleTodo } from '../../actions';

const getVisibleTodos = (todos, visibilityFilterValue) => {
  switch (visibilityFilterValue) {
    case FILTER_SHOW_ALL:
      return todos;
    case FILTER_SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case FILTER_SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(
    state[APP_KEY_STORE][APP_KEY_TODOS],
    state[APP_KEY_STORE][APP_KEY_VISIBILITY]),
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
