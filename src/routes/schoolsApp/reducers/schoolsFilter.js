import { ACTION_FILTER_TOGGLE } from '../actions/constants';

function toggleFilter(filters = [], key, name, status) {
  const hasKey = filters.some(u => u.key === key);
  let toReturn = [];
  if (hasKey && status) {
    toReturn = filters.map((u) => {
      if (u.key === key) {
        return {
          key,
          options: u.options.filter(optionName => (
            optionName !== name
          )),
        };
      }
      return u;
    });
  } else if (hasKey && !status) {
    toReturn = filters.map((u) => {
      if (u.key === key) {
        return {
          key,
          options: [
            ...u.options,
            name,
          ],
        };
      }
      return u;
    });
  } else if (!hasKey && status) {
    toReturn = [...filters];
  } else if (!hasKey && !status) {
    toReturn = [
      ...filters,
      {
        key,
        options: [name],
      },
    ];
  }
  return toReturn.filter(u => u.options.length > 0);
}
// key: PropTypes.string.isRequired,
// name: PropTypes.string.isRequired,
// status: PropTypes.bool.isRequired,
const schoolsFilterReducer = (state = [], action) => {
  switch (action.type) {
    case ACTION_FILTER_TOGGLE:
      return toggleFilter(state, action.key, action.name, action.status);
    default:
      return state;
  }
};

export default schoolsFilterReducer;
