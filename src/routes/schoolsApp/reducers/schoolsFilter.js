import {
  ACTION_FILTER_TOGGLE,
} from '../actions/constants';

function getNextState(state = [], key, name, status) {
  const hasKey = state.some(u => (
    u.key === key
  ));

  if (hasKey) {
    return state.map((filterObj) => {
      if (filterObj.key === key) {
        const hasName = filterObj.options.some(option => option.name === name);
        if (hasName) {
          return {
            key,
            options: filterObj.options.map((option) => {
              if (option.name === name) {
                return { name, status };
              }
              return option;
            }),
          };
        }
        return {
          key,
          options: [
            ...filterObj.options,
            { name, status },
          ],
        };
      }
      return filterObj;
    });
  }
  return [
    ...state,
    {
      key,
      options: [
        { name, status },
      ],
    },
  ];
}

/**
 *
 * @param {*} state :: {
 *   key:
 *   options: [
 *    {value: '', status:'true'}
 *   ]
 * }
 * @param {*} action
 */
export default function (state = [], action = {
  type: ACTION_FILTER_TOGGLE,
  filterKey: '',
  filterValue: '',
  filterStatus: false,
}) {
  switch (action.type) {
    case ACTION_FILTER_TOGGLE:
      return getNextState(
        state,
        action.filterKey,
        action.filterValue,
        action.filterStatus,
      );
    default:
      return state;
  }
}
