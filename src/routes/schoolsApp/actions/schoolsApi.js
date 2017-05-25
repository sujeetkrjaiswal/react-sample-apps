import 'whatwg-fetch';
import { SchoolsListUrl } from './constants';

export default function () {
  return fetch(SchoolsListUrl)
    .then(response => response.json())
    .then(schools => schools.map(school => ({
      ...school,
      searchText: Object.keys(school).reduce((agg, key) => `${agg} ; ${school[key]}`, ''),
    }),
    ).slice(0, 100),
  );
}
