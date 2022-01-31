import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import jwtDecode from 'jwt-decode';
import history from './history';

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'https://dscatalog-prod.herokuapp.com';
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'dscatalog';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'dscatalog123';
const TOKEN_KEY = 'dscatalogAuthData';

type Role = 'ROLE_OPERATOR' | 'ROLE_ADMIN';

type TokenData = {
  exp: number;
  user_name: string;
  authorities: Role[];
}

type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  userLastName: string;
  userFirstName: string;
  userId: number
}

type LoginData = {
  username: string;
  password: string;
}

export const requestBackendLogin = (loginData: LoginData) => {
  const headers = {
    Authorization: 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET),
    "Content-Type": "application/x-www-form-urlencoded",
  }

  const data = qs.stringify({
    ...loginData,
    grant_type: 'password'
  })

  return axios({
    method: 'POST',
    baseURL: BASE_URL,
    url: '/oauth/token',
    data,
    headers
  })
}

export const requestBackend = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials ? {
    ...config.headers,
    Authorization: "Bearer " + getAuthData().access_token,
  } : config.headers;

  return axios({ ...config, baseURL: BASE_URL, headers });
}

export const saveAuthData = (loginResponse: LoginResponse) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(loginResponse));
}

export const getAuthData = () => {
  const str = localStorage.getItem(TOKEN_KEY) ?? '{}';
  return JSON.parse(str) as LoginResponse;
}

export const getTokenData = (): TokenData | undefined => {
  const loginResponse = getAuthData();
  try {
    return jwtDecode(loginResponse.access_token) as TokenData;
  } catch (error) {
    return undefined;
  }
}

export const isAuthenticated = (): boolean => {
  const tokenData = getTokenData();
  return (tokenData && ((tokenData.exp * 1000) > (Date.now()))) ? true : false;
}

axios.interceptors.request.use(function (config) {
  console.log("INTERCEPTOR ANTES DA REQUIISIÇÃO")
  return config;
}, function (error) {
  console.log("INTERCEPTOR ERRO NA REQUIISIÇÃO")
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  console.log("INTERCEPTOR RESPOSTA COM SUCESSO")
  return response;
}, function (error) {
  if (error.response.status === 401) {
    history.push('/admin/auth/login')
  }

  if (error.response.status === 403) {
    history.push('/admin/403')
  }
  console.log("INTERCEPTOR RESPOSTA COM ERRO")
  return Promise.reject(error);
});