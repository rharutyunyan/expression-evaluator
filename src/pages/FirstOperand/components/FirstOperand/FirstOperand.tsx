import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { notification, Row, Col } from 'antd';

import { MyGrid, MyCard, MyForm, HeaderTitle } from '../../../../components';
import { EvalContext, DispatchContext } from '../../../../context/provider/EvalProvider';
import { isNumber } from '../../../../utils/is-number.utils';
import * as actions from '../../../../context/actions/EvalActions';

const FirstOperand: React.FC = () => {
  const {
    evaluation: { num1 },
  } = useContext(EvalContext);
  const dispatch = useContext(DispatchContext);
  const history = useHistory();

  const addNumber = (num: string) => {
    if (isNumber(num)) {
      dispatch(actions.addNum1(num));
      history.push('/result');
    } else {
      notification.error({
        message: 'Please specify correct value!',
        placement: 'topRight',
      });
    }
  };

  return (
    <Row>
      <Col span={24}>
        <HeaderTitle />
      </Col>
      <Col span={8}>
        <MyForm addNumber={addNumber} />
      </Col>
    </Row>
  );
};
export default FirstOperand;
