import React, { createContext, useReducer, FC } from 'react';
import { ActionType } from 'typesafe-actions';

import { IEvalProviderProps } from '../types/eval-provider-props.type';
import * as actions from '../actions/EvalActions';
import * as evalReducer from '../reducer/Reducer';

interface State {
  evaluation: evalReducer.State;
}

const appReducer = (state: State, action: ActionType<typeof actions>) => ({
  evaluation: evalReducer.reducer(state.evaluation, action as ActionType<typeof actions>),
});

const initialState: State = {
  evaluation: evalReducer.initialState,
};

export const EvalContext = createContext(initialState);
export const DispatchContext = createContext((_: ActionType<typeof actions>) => {});

export const EvalProvider: FC<IEvalProviderProps> = ({ children }) => {
  // @ts-ignore
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <EvalContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </EvalContext.Provider>
  );
};
