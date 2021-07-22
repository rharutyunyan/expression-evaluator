import { ActionType } from 'typesafe-actions';

import * as actions from '../actions/EvalActions';

export interface State {
  num1: string | undefined;
  num2: string | undefined;
  operator: string | undefined;
  result: string | undefined;
}

export const initialState: State = {
  num1: undefined,
  num2: undefined,
  operator: '+',
  result: undefined,
};

export const reducer = (state = initialState, action: ActionType<typeof actions>) => {
  switch (action.type) {
    case actions.ADD_NUM_1:
      console.log(action);
      return {
        ...state,
        num1: action.num,
      };
    case actions.ADD_NUM_2:
      console.log(action);
      return {
        ...state,
        num2: action.num,
      };
    case actions.ADD_OPERATOR:
      console.log(action);
      return {
        ...state,
        operator: action.operator,
      };
    case actions.RESULT:
      console.log(state);
      return {
        ...state,
        result: eval(`${state.num1} ${state.operator} ${state.num2}`),
      };
    default:
      return state;
  }
};
