import 'whatwg-fetch';
import { SchoolsListUrl } from './constants';

export default function () {
  return fetch(SchoolsListUrl)
    .then(response => response.json())
    .then(schools => schools.slice(0, 100));
}
