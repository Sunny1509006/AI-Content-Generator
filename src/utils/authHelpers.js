import Cookies from "universal-cookie";
import { BEARER_TOKEN_COOKIE_NAME } from "./constants";

export const logout = (clearUserInfo = () => {}, onLogout = () => {}) => {
  const cookies = new Cookies(null, { path: "/" });

  cookies.remove(BEARER_TOKEN_COOKIE_NAME);
  clearUserInfo();
  onLogout();
};
