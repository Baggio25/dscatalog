import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'https://dscatalog-prod.herokuapp.com';
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'dscatalog';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'dscatalog123';

const TOKEN_KEY = 'dscatalogAuthData';

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