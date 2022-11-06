import axios from 'axios';
import { BASE_URL } from './path';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});

export default instance;
