import {
  APP_KEY_STORE as CONTACTS_APP_KEY,
  APP_KEY_CONTACTS,
  APP_KEY_QUERY,
  APP_KEY_SORT,
  APP_KEY_SORT_ORDER,
  APP_KEY_SORT_FIELD,
  CONTACT_SORT_NONE,
  CONTACT_NAME,
} from '../routes/contactForm/actions/constants';
import {
  APP_KEY_STORE as TODO_APP_KEY,
  APP_KEY_TODOS,
  APP_KEY_VISIBILITY,
  FILTER_SHOW_ALL,
} from '../routes/todo/actions/constants';

const todos = [
  {
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
  },
];

const contacts = [
  {
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
  },
];

export default {
  [TODO_APP_KEY]: {
    [APP_KEY_TODOS]: todos,
    [APP_KEY_VISIBILITY]: FILTER_SHOW_ALL,
  },
  [CONTACTS_APP_KEY]: {
    [APP_KEY_CONTACTS]: contacts,
    [APP_KEY_QUERY]: '',
    [APP_KEY_SORT]: {
      [APP_KEY_SORT_ORDER]: CONTACT_SORT_NONE,
      [APP_KEY_SORT_FIELD]: CONTACT_NAME,
    },
  },
};
