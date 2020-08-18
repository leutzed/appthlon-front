import axios from 'axios';

const api = axios.create({
  baseURL: 'https://appthlon.herokuapp.com/',
});

export default api;
