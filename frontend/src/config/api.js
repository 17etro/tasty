import axios from "axios";
const backendUrl = "http://127.0.0.1:5000";

const service = axios.create({
  baseURL: backendUrl,
});

export { service };
