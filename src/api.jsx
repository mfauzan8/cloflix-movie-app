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

export const getAllTrending = async () => {
  const response = await api.get(`/trending/all/day?language=en-US`);
  return response.data;
};


export const getNowPlaying = async (page) => {
  const response = await api.get(`/movie/now_playing?language=en-US&page=${page}`);
  return response.data;
};

export const getMovie = async (page) => {
  const response = await api.get(`/discover/movie?language=en-US&include_adult=false&page=${page}&sort_by=popularity.desc`);
  return response.data;
};

export const getTV = async (page) => {
  const response = await api.get(`/discover/tv?language=en-US&include_adult=false&page=${page}&sort_by=popularity.desc`);
  return response.data;
};

export const getSearch = async (search, type, country, page) => {
  const response = await api.get(`/search/${type}?query=${search}&include_adult=false&language=${country}&page=${page}`);
  return response.data;
};

export const getDetail = async (type, id) => {
  const response = await api.get(`/${type}/${id}?language=en-US`);
  return response.data;
}

export const getCredits = async (type, id) => {
  const response = await api.get(`/${type}/${id}/credits`);
  return response.data;
}


export default api;
