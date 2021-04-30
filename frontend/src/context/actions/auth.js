import * as actionTypes from "../actionTypes/actionTypes";

export const successLogIn = (token) => {
  localStorage.setItem("tasty_auth", JSON.stringify({ token }));

  return {
    type: actionTypes.SUCCESS_LOGIN,
    token: token,
  };
};
