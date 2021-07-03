import axios from 'axios';

export default axios.create({
  baseURL: `http://jsonplaceholder.typicode.com`
//   baseURL: `https://jsonplaceholder.typicode.com/users`
});