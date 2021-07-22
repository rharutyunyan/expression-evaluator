import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Col, Input, notification } from 'antd';
import { Select } from 'antd';

import { MyGrid, MyCard, HeaderTitle, MyForm } from '../../../../components/';
import { DispatchContext, EvalContext } from '../../../../context/provider/EvalProvider';
import { isNumber } from '../../../../utils/is-number.utils';
import * as actions from '../../../../context/actions/EvalActions';

const { Option } = Select;

const FirstNumber: React.FC = () => {
  const {
    evaluation: { num1, num2, operator: contextOperator, result },
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
    <MyGrid>
      <MyCard>
        <HeaderTitle />
        <Col span={12}>
          <Typography>
            <Input disabled value={num1} />
            <Input disabled value={num2} />
            <Input disabled value={operator} />
            {'='}
            <span>{result}</span>
          </Typography>
        </Col>

        <Col span={8}>
          <Select
            defaultValue="+"
            style={{ width: 120 }}
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
        <Col span={8}>
          <MyForm addNumber={addSecondOperand} />
        </Col>
      </MyCard>
    </MyGrid>
  );
};
export default FirstNumber;
