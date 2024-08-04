import axios from 'axios';

const API_KEY = import.meta.env.VITE_AUTH_KEY;
const BASE_URL = import.meta.env.VITE_BASE_API_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`
}
});

export const getNewToken = async () => {
  const response = await api.get('/authentication/token/new');
  return response.data;
};

export const validateGuest = async () => {
  const response = await api.get('/authentication/guest_session/new');
  return response.data;
};

export const validateWithLogin = async (username, password, requestToken) => {
  const response = await api.post('/authentication/token/validate_with_login', {
    username,
    password,
    request_token: requestToken,
  });
  return response.data;
};

export const createSession = async (requestToken) => {
  const response = await api.post('/authentication/session/new', {
    request_token: requestToken,
  });
  return response.data;
};

export default api;
