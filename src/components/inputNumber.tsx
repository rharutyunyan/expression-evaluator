import { Input, } from 'antd'
import Grid from 'antd/lib/card/Grid'
import React from 'react'
import styled from 'styled-components'
interface propsType {
    onChangeInput: (arg: number) => void
    value: number
}
const InputUser: React.FC<propsType> = ({ onChangeInput, value }) => {
    const MyInput = styled(Input)`
    border-color:grey ;
    border-style:'solid';
    padding:15px 0;
    border-width: 1px;
    border-radius: 5px;
    width: 100%;

    `
    return (
        <Grid>
            < MyInput type='number' min={1} value={value} onChange={(e) => onChangeInput(+e.target.value)} />
        </Grid>
    )
}
export default InputUser