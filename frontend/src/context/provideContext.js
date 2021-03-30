import React, { createContext, useReducer } from "react";
import * as actionTypes from "./actionTypes/actionTypes";

const initialState = JSON.parse(localStorage.getItem("tasty_auth")) || {
  token: null,
  userId: null,
  // ...
};

const storeContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SUCCESS_LOGIN: {
      return {
        ...state,
        token: "111",
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
