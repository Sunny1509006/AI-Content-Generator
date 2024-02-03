import axios from "axios";

const instance = axios.create({
  baseURL: "https://faisaliteb.ai",
});

export default instance;