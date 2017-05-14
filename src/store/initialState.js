import { CONTACT_SORT_NONE, CONTACT_NAME } from '../routes/contactForm/actions/constants';
import { SHOW_ALL } from '../routes/todo/actions/constants';

export default {
  todos: [{
    id: 1,
    text: 'Learn React',
    completed: false,
  }, {
    id: 2,
    text: 'Write a Sample application',
    completed: true,
  }, {
    id: 3,
    text: 'Use Route Params for router',
    completed: false,
  }, {
    id: 4,
    text: 'Data Sharing between sibling independent components',
    completed: false,
  }, {
    id: 5,
    text: 'Create a Starter React Application',
    completed: true,
  }, {
    id: 6,
    text: 'Add Multiple sub application',
    completed: true,
  }],
  todosvisibility: SHOW_ALL,
  // Initial State for contact
  contacts: [{
    id: 1,
    name: 'Sujeet Kumar Jaiswal',
    email: 'er.sujeetkumarjaiswal@gmail.com',
    phone: 8861301007,
    address: 'Bangalore, India',
  }, {
    id: 2,
    name: 'Rajeev Kumar Srivastava',
    email: 'rajeev@gmail.com',
    phone: 1000000000,
    address: 'Lucknow, India',
  }, {
    id: 3,
    name: 'Amarnath Paswan',
    email: 'amar@gmail.com',
    phone: 3000000000,
    address: 'Lucknow, India',
  }, {
    id: 4,
    name: 'Vikas Singh',
    email: 'viks@gmail.com',
    phone: 3000000000,
    address: 'Lucknow, India',
  }, {
    id: 5,
    name: 'Dev Dutta',
    email: 'dev@gmail.com',
    phone: 2000000000,
    address: 'Lucknow, India',
  }],
  contactsSearch: '',
  contactsOrder: {
    sortOrder: CONTACT_SORT_NONE,
    sortField: CONTACT_NAME,
  },
};
