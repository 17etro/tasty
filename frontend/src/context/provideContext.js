import React, { createContext, useReducer } from "react";
import * as actionTypes from "./actionTypes/actionTypes";

const initialState = {
  token: localStorage.getItem("tasty_token") || null,
  name: null,
  surname: null,
  email: null,
};

const storeContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SUCCESS_LOGIN: {
      return {
        ...state,
        name: action.name,
        surname: action.surname,
        email: action.email,
        token: action.token,
      };
    }
    case actionTypes.ON_LOG_OUT: {
      return {
        ...state,
        name: null,
        surname: null,
        email: null,
        token: null,
      };
    }
    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <storeContext.Provider value={{ state, dispatch }}>
      {children}
    </storeContext.Provider>
  );
};

export { StateProvider, storeContext };
