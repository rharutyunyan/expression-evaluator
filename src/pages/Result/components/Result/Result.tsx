import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Input, notification, Select, Row } from 'antd';

import { HeaderTitle, MyForm } from '../../../../components/';
import { DispatchContext, EvalContext } from '../../../../context/provider/EvalProvider';
import { isNumber } from '../../../../utils/is-number.utils';
import * as actions from '../../../../context/actions/EvalActions';
import './Result.scss';

const { Option } = Select;

const FirstNumber: React.FC = () => {
  const {
    evaluation: { num1, num2, result },
  } = useContext(EvalContext);
  const dispatch = useContext(DispatchContext);
  const history = useHistory();

  const [operator, setOperator] = useState<string>('+');

  useEffect(() => {
    if (!num1) {
      history.push('/');
    }
  }, []);

  const onOperatorChange = (value: string) => {
    setOperator(value);
    dispatch(actions.addOperator(value));
  };

  const addSecondOperand = (value: string) => {
    if (isNumber(value)) {
      dispatch(actions.addNum2(value));
      dispatch(actions.result());
    } else {
      notification.error({
        message: 'Please specify correct value!',
        placement: 'topRight',
      });
    }
  };

  return (
    <Row>
      <Col md={24} sm={24} className="evaluation-result">
        <HeaderTitle />
      </Col>
      <Col span={24}>
        <div className="number-input-div">
          <Input className="number-input" disabled value={num1} />
          <Input className="number-input" disabled value={num2} />
          <Input className="number-input" disabled value={operator} />
          <div className="equal">=</div>
          <div className="result">{result}</div>
        </div>
      </Col>

      <Col span={24} style={{ textAlign: 'center' }}>
        <Select
          defaultValue="+"
          className="select-operator"
          onChange={onOperatorChange}
          value={operator}
        >
          <Option value="+" key="+">
            +
          </Option>
          <Option value="-" key="-">
            -
          </Option>
          <Option value="*" key="*">
            *
          </Option>
          <Option value="/" key="/">
            /
          </Option>
        </Select>
      </Col>
      <Col span={24}>
        <MyForm addNumber={addSecondOperand} />
      </Col>
    </Row>
  );
};
export default FirstNumber;
