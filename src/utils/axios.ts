import axios from 'axios';

const API_URL = process.env.API_URL;
const X_AUTH_TOKEN = process.env.X_AUTH_TOKEN;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Auth-Token': X_AUTH_TOKEN,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});

export default axiosInstance;
