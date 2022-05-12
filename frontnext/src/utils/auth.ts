import jwtDecode from "jwt-decode";
import queryString from "query-string";

import { AccessToken, LoginResponse, Role } from "../@types";
import { api, AUTH_TOKEN } from "./api";

export async function loginUser(username: string, password: string) {
  const data = queryString.stringify({
    username,
    password,
    grant_type: "password",
  });

  const login = await api.post("/oauth/token", data, {
      headers: {
          Authorization: AUTH_TOKEN,
          "Content-Type": "application/x-www-form-urlencoded"
      }
  }).then((res) => {
      const { access_token } = res.data;

      localStorage.setItem("@dscatalog/token", JSON.stringify(access_token));
      return res.data;
  }).catch(err => console.log(err))

  return login;
}

export function isAllowedByRole(routeRoles: Role[] = []) {
  if(routeRoles.length === 0) return true;

  const { authorities } = getAccessTokenDecoded();
  
  return routeRoles.some((role) => authorities?.includes(role));
} 

export function getAccessTokenDecoded() {
  const sessionData = getSessionData();

  try {
    const tokenDecoded = jwtDecode(sessionData.access_token);
    return tokenDecoded as AccessToken;
  } catch (err) {
    return {} as AccessToken;
  }
}

export function getSessionData() {
  if(typeof window !== "undefined") {
    const sessionData = localStorage.getItem("authData") || "{}";
    const parsedSessionData = JSON.parse(sessionData);
    return parsedSessionData as LoginResponse;
  }
}

