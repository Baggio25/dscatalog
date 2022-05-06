import axios from "axios";

export const api = axios.create({
  baseURL: "https://dscatalog-prod.herokuapp.com/",
});
