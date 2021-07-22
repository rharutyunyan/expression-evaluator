import styled from 'styled-components';
import { Card, } from 'antd';
import Grid from 'antd/lib/card/Grid';


export const MyCard = styled(Card)` 
max-width: 500px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color:white;
padding:15px 


`
export const MyGrid = styled(Grid)` 
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color:gray

`