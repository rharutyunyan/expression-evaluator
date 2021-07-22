
import { Typography } from "antd";
import Grid from "antd/lib/card/Grid";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


import { MyGrid, MyCard } from "../components/styledComponents";
import { CurrentContext } from "../context/context";
import { Select } from 'antd';

const { Option } = Select;

const FirstNumber: React.FC = ({ }) => {
    const [{ num1, num2, result }, dispatch] = useContext(CurrentContext)
    const history = useHistory()
    const [operator, setOperator] = useState<string>('+')

    useEffect(() => {
        dispatch({ type: 'RESULT', operator })
    }, [])


    function checkOperator(value: string) {


        setOperator(value)
    }

    return (
        <MyGrid >
            <MyCard >
                <Typography>{num1}{operator}{num2}= {result ? result : ''}</Typography>

                <Grid>
                    <Select defaultValue='+' style={{ width: ' 120px', }} >
                        <Option value='*' >*</Option>
                        <Option value='-'>-</Option>
                        <Option value='+'>+</Option>
                    </Select>
                </Grid>
            </MyCard>
        </MyGrid>
    )

}
export default FirstNumber