import React from 'react';
import { Input, Row } from 'antd';
import styled from 'styled-components';

import { IInputNumberPropsType } from './types/input-number-props.type';

const InputUser: React.FC<IInputNumberPropsType> = ({ onChangeInput, value }) => {
  const MyInput = styled(Input)`
    border-color: grey;
    border-style: 'solid';
    padding: 15px 0;
    border-width: 1px;
    border-radius: 5px;
    width: 100%;
  `;

  return (
    <Row>
      <MyInput type="number" value={value} onChange={(e) => onChangeInput(e.target.value)} />
    </Row>
  );
};

export default InputUser;
