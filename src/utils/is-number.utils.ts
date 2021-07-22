import { operandPattern } from './patterns.utils';

export const isNumber = (value: string): boolean => operandPattern.test(value);
