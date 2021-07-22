import React from 'react';
import { Button, Row } from 'antd';
import './ButtonSubmit.scss';

import { IButtonSubmitProps } from './types/button-submit-props.type';

const ButtonSubmit: React.FC<IButtonSubmitProps> = ({ title, submitFunc, value }) => {
  return (
    <Row>
      <Button className="submit-button" onClick={() => submitFunc(value)}>
        {title}
      </Button>
    </Row>
  );
};
export default ButtonSubmit;
