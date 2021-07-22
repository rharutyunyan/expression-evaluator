import Grid from "antd/lib/card/Grid";
import { Input, } from 'antd'
import React, { useState } from 'react'
import ButtonSubmit from './buttonSubmit'
import InputUser from './inputNumber'
import styled from "styled-components";
interface propType {
    addNumber: (arg: number) => void
}
const MyForm: React.FC<propType> = ({ addNumber }) => {
    const [value, setValue] = useState<number>(0)
    const MyInput = styled(Input)`
    border-color:grey ;
    border-style:'solid';
    padding:15px 0;
    border-width: 1px;
    border-radius: 5px;
    width: 100%;

    `




    return (
        <Grid >
            <Grid>
                < MyInput type='number' min={1} value={value} onChange={(e) => setValue(+e.target.value)} />
            </Grid>
            <ButtonSubmit title='Add number' submitFunc={addNumber} value={value} />

        </Grid>
    )
}
export default MyForm