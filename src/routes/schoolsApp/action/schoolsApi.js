import 'whatwg-fetch';
// import { SchoolsListUrl } from './constants';

export default function () {
  // return fetch(SchoolsListUrl);
  return fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    .then(response => response.json());
}
