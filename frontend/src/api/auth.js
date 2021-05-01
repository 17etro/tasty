import { service } from "../config/api";

const login = (loginData) => service.post("/login", loginData);
const signup = (signUpData) => service.post("/signup", signUpData);

const getUserByToken = (token) =>
  service.get("/getUser", {
    headers: {
      Authorization: token,
    },
  });

export { login, signup, getUserByToken };
