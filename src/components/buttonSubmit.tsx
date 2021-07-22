import { Button } from "antd";
import Grid from "antd/lib/card/Grid";
import React from "react";
import styled from "styled-components";

interface propsTypes {
    title: string,
    submitFunc: (arg: number) => void,
    value: number
}

const ButtonSubmit: React.FC<propsTypes> = ({ title, submitFunc, value }) => {
    const MyButton = styled(Button)` 
    color: white;
    background-color:#79CEA1 ;
    border-color: transparent;
    padding:15px 0;
    width: 100%;
    font-size: 18px;
    margin:20px 0
    `
    return (
        <Grid>
            <MyButton onClick={() => submitFunc(value)}>
                {title}
            </MyButton>
        </Grid>
    )
}
export default ButtonSubmit
