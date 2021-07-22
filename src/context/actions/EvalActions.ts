export const ADD_NUM_1 = 'eval/ADD_NUM_1';
export const addNum1 = (num: string) =>
  ({
    type: ADD_NUM_1,
    num,
  } as const);

export const ADD_NUM_2 = 'eval/ADD_NUM_2';
export const addNum2 = (num: string) =>
  ({
    type: ADD_NUM_2,
    num,
  } as const);

export const ADD_OPERATOR = 'eval/ADD_OPERATOR';
export const addOperator = (operator: string) =>
  ({
    type: ADD_OPERATOR,
    operator,
  } as const);

export const RESULT = 'eval/RESULT';
export const result = () => {
  console.log('-----stex mtav nayev');
  return {
    type: RESULT,
  } as const;
};
