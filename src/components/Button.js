import React from 'react';
import styled from 'styled-components'
import { BEIGE_LIGHT, BLUE } from '../utils/colors';

const StyledButton = styled.button`
    margin: 1em;
    font-weight: 600;
    letter-spacing: 0.08em;
    height: 2em;
    padding: 0 1em;
    border-radius: 1em;
    border: 0.1em solid ${props => props.border || 'transparent'};
    background-color: ${props => props.bg || BLUE};
    color: ${props => props.color || BEIGE_LIGHT};
    text-transform: uppercase;
    &:hover:enabled {
        background: white;
        color: ${BLUE};
        cursor: pointer;
    }
`
const Button = (props) => {
    return <StyledButton {...props}/>;
};

export default Button;