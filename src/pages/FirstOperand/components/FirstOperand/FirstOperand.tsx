
import Grid from "antd/lib/card/Grid";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import ButtonSubmit from "../components/buttonSubmit";
import MyForm from "../components/form";
import Title from "../components/headerTitle";
import InputUser from "../components/inputNumber";
import { MyGrid, MyCard } from "../components/styledComponents";
import { CurrentContext } from "../context/context";


const FirstOperand: React.FC = ({ }) => {
    const [{ num1, num2 }, dispatch] = useContext(CurrentContext)
    const history = useHistory()

    const addNumber = (num: number) => {

        if (num1 !== 0 && num2 === 0) {
            dispatch({ type: 'ADD_NUM2', num })

        } else if ((num1 !== 0 && num2 !== 0)) {
            history.push('result')
        } else {
            dispatch({ type: 'ADD_NUM1', num })
        }

    }
    console.log(`num1 :${num1}`, `num2 :${num2}`)


    return (
        <MyGrid >
            <MyCard >
                <Title />
                <MyForm addNumber={addNumber} />

            </MyCard>
        </MyGrid>
    )

}
export default FirstOperand
