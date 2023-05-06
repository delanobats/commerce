import axios from 'axios';

const API_URL = 'https://api.bigcommerce.com/stores/jo3a1dt1';
const X_AUTH_TOKEN = 'axkiw2t6o9us7bcafi83lxcdzl3f65t';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Auth-Token': X_AUTH_TOKEN,
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});

export default axiosInstance;
