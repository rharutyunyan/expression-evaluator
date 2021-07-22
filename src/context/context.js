import React, { createContext, useReducer } from "react";
const initialState = {
  num1: 0,
  num2: 0,
  result:0
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NUM1":
      return {
        ...state,
        num1: action.num
      };
    case "ADD_NUM2":
      return {
        ...state,
       num2:action.num
      };
    case "RESULT":
        
      return {
        ...state,
        result:(eval(`${(state.num1)} ${action.operator} ${(state.num2)}`))
      };
    default:
      return state;
  }
};
export const CurrentContext = createContext();

export const CurrentProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return (
    <CurrentContext.Provider value={value}>
      {children}
    </CurrentContext.Provider>
  );
};