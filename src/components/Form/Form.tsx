import React, { useState } from 'react';
import { Input, Row, Col } from 'antd';

import ButtonSubmit from '../SubmitButton/ButtonSubmit';
import { IMyFormProps } from './types/my-form-props.type';
import './Form.scss';

const MyForm: React.FC<IMyFormProps> = ({ addNumber }) => {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <Row>
        <Input
          className="my-input"
          min={1}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Row>
      <ButtonSubmit title="Add number" submitFunc={addNumber} value={value} />
    </>
  );
};
export default MyForm;
