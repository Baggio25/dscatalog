import queryString from "query-string";
import { api, AUTH_TOKEN } from "./api";

export const STORAGE_VAR = "@dscatalog/token";

export const loginUser = async (username: string, password: string) => {
  const data = queryString.stringify({
    username,
    password,
    grant_type: "password",
  });

  const login = await api
    .post("/oauth/token", data, {
      headers: {
        Authorization: AUTH_TOKEN,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((res) => {
      const { access_token } = res.data;
      localStorage.setItem(STORAGE_VAR, JSON.stringify(access_token));

      return res.data;
    })
    .catch((err) => console.log(err));

  return login;
};
