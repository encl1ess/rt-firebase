import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '..';
import { BEIGE, BLUE } from '../utils/colors';
import Button from './Button';
import Container from './Container';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const StyledContainer = styled(Container)`
    width: 60%;
    height: 15em;
    color: white;
    margin: 2em;
    border-radius: 1em;
    
`
const Login = () => {
    const {auth} = useContext(Context);

    const login = async () => {
        const provider = new GoogleAuthProvider();
        const {user} = await signInWithPopup(auth, provider);
        console.log(user);

    }
    return (
        <StyledContainer direction="column" bg={BLUE}>
            <p>Sign-in with:</p>
            <Button onClick={login} bg={BEIGE} color={BLUE} border={BLUE}>Google</Button>
        </StyledContainer>
    );
};

export default Login;