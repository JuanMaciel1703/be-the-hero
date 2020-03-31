import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3333"  
})

api.interceptors.request.use(config => {
  let token = null;
  const userData = localStorage.getItem('@be-the-hero/user');

  if (userData) {
    const parsedData = JSON.parse(userData);
    token = parsedData.token;
  }

  if (!token) {
    return config;
  }

  config.headers.Authorization = `Bearer ${token}`

  return config;
})

export default api;