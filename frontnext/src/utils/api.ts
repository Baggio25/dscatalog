import axios from "axios";

export const api = axios.create({
  baseURL: "https://dscatalog-prod.herokuapp.com",
});

export const AUTH_TOKEN = "Basic ZHNjYXRhbG9nOmRzY2F0YWxvZzEyMw==";
