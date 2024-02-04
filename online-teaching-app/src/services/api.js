// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api', // Update with your backend URL
});

export default api;
