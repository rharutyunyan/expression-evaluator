import React from 'react';
import { Typography, Row } from 'antd';
import styled from 'styled-components';
import './HeaderTitle.scss';

const Title: React.FC = () => {
  const Text = styled(Typography)`
    font-size: 36px;
    color: #79cea1;
  `;

  return (
    <Row className="header-title">
      <Text>Expression Evaluator</Text>
    </Row>
  );
};
export default Title;
