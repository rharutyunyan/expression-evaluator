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
        <Col md={12} xs={24}>
          <div className="form-input-item">
            <Input className="my-input" value={value} onChange={(e) => setValue(e.target.value)} />
          </div>
        </Col>
        <Col md={12} xs={24}>
          <div className="form-input-item">
            <ButtonSubmit title="Add number" submitFunc={addNumber} value={value} />
          </div>
        </Col>
      </Row>
    </>
  );
};
export default MyForm;
