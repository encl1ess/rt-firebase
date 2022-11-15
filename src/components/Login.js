import React from 'react';
import styled from 'styled-components';
import { BEIGE, BEIGE_LIGHT, BLUE } from '../utils/colors';
import Button from './Button';
import Container from './Container';

const StyledContainer = styled(Container)`
    width: 60%;
    height: 15em;
    color: white;
    margin: 2em;
`
const Login = () => {
    return (
        <StyledContainer direction="column" bg={BLUE}>
            <p>Авторизоваться с:</p>
            <Button bg={BEIGE} color={BLUE} border={BLUE}>Google</Button>
        </StyledContainer>
    );
};

export default Login;