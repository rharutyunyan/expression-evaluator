import styled from 'styled-components';
import { Card, Row } from 'antd';

export const MyCard = styled(Card)`
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  padding: 15px;
`;

export const MyGrid = styled(Row)`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;
