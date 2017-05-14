import todosReducers from '../routes/todo/reducers';
import contactsReducers from '../routes/contactForm/reducers';
import schoolAppReducers from '../routes/schoolsApp/reducers';

const reducers = {
  ...todosReducers,
  ...contactsReducers,
  ...schoolAppReducers,
};

export default reducers;
