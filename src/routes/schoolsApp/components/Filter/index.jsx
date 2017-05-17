import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleFilter } from '../../actions';
import Filters from './filters.component';

function getAvailableFilters(schoolList, keys = [], availableFilters) {
  const filterObj = schoolList.reduce(
    (agg, u) => (
      keys.reduce(
        (_agg, key) => {
          const aggTemp = _agg;
          aggTemp[key][u[key]] = false;
          return _agg;
        },
        agg,
      )
    ),
    keys.reduce(
      (agg, u) => ({
        ...agg,
        [u]: {},
      }),
      {},
    ),
  );
  availableFilters.forEach((u) => {
    u.options.forEach((name) => {
      filterObj[u.key][name] = true;
    });
  });

  const filters = keys.reduce((agg, key) => (
    [
      ...agg,
      {
        key,
        options: Object.keys(filterObj[key]).map(
          name => ({ name, status: filterObj[key][name] }),
        ),
      },
    ]
  ), []);
  return filters;
}

const mapStateToProps = (store, props) => ({
  filters: getAvailableFilters(props.schools, props.keys, store.schoolFilters),
});

const mapDispatchToProps = dispatch => ({
  onClick: (key, value, status) => dispatch(toggleFilter(key, value, status)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filters));
