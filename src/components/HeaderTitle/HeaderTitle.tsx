import React from 'react';
import { Typography, Row } from 'antd';
import styled from 'styled-components';

const Title: React.FC = () => {
  const styles = { margin: '0px auto', display: 'block' };
  const Text = styled(Typography)`
    font-size: 36px;
    color: #79cea1;
  `;

  return (
    <Row style={styles}>
      <Text>Expression Evaluator</Text>
    </Row>
  );
};
export default Title;
