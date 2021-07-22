import { Typography } from 'antd'
import Grid from 'antd/lib/card/Grid'
import React from 'react'
import styled from 'styled-components'


const Title: React.FC = () => {
    const styles = { padding: '30px' }
    const Text = styled(Typography)`
    font-size: 36px;
    color: #79CEA1;
    `
    return (
        <Grid style={styles}>
            <Text>Expression</Text>
            <Text>Evaluator</Text>
        </Grid>

    )

}
export default Title