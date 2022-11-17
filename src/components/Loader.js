import React from 'react';
import styled, { keyframes } from 'styled-components';
import Container from './Container';
import { BLUE } from '../utils/colors';

const rotateAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`
const StyledLoader = styled(Container)`
    margin: auto;
    height:100%;
    &:after{
        content: " ";
        display: block;
        width: 5em;
        height: 5em;
        border-radius: 50%;
        border: 0.7em dotted ${BLUE};
        animation: ${rotateAnimation} 1.7s linear infinite;
    }
`
const Loader = () => {
    return (
        <StyledLoader />
        );
};

export default Loader;