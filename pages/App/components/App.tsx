import React, { useState, useCallback } from 'react';
import { debounce } from 'lodash';
import { Typography, PageHeader, Input, Button, notification } from 'antd';

import './App.css';
import { operandPattern } from '../../../utils/patterns.utils';

const { Title } = Typography;

const App = () => {
  const [expression, setExpression] = useState<any>({
    firstOperand: '',
    secondOperand: '',
    operator: '',
  });
  const [inputValue, setInputValue] = useState<number>();

  const handleInputChange = (value: string) => {
    const isValid = operandPattern.test(value);
    if (!isValid) {
      notification.warning({ message: 'Please enter valid value', duration: 1500 });
      return;
    }
    setInputValue(parseInt(value, 10));
  };

  const debounceFunc = useCallback(
    debounce((value: string) => handleInputChange(value), 500),
    [],
  );

  const onFirstOperandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debounceFunc(e.target.value);
  };

  const onAddOperand = () => {
    setExpression({ ...expression, firstOperand: inputValue });
  };

  return (
    <>
      <PageHeader title={<Title level={3}>Expression Evaluator</Title>} />
      <Input placeholder="Operand" value={inputValue} onChange={onFirstOperandChange} />
      <Button onClick={onAddOperand} />
    </>
  );
};

export default App;
