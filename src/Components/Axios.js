import axios from "axios";
import Cookies from "universal-cookie";
import { BEARER_TOKEN_COOKIE_NAME } from "../utils/constants";

const instance = axios.create({
  baseURL: "https://faisaliteb.ai",
});

instance.interceptors.request.use(function (config) {
  const cookies = new Cookies(null, { path: "/" });
  const token = cookies.get(BEARER_TOKEN_COOKIE_NAME);

  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default instance;
