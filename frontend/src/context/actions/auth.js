import * as actionTypes from "../actionTypes/actionTypes";

export const successLogIn = (data) => {
  localStorage.setItem("tasty_token", data.token);

  return {
    type: actionTypes.SUCCESS_LOGIN,
    token: data.token,
    name: data.name,
    surname: data.surname,
    email: data.email,
  };
};

export const logOut = () => {
  localStorage.removeItem("tasty_token");

  return {
    type: actionTypes.ON_LOG_OUT,
  };
};
