import React from 'react';
import styled from 'styled-components'
import { BEIGE, BEIGE_LIGHT, BLUE } from '../utils/colors';

const StyledButton = styled.button`
    padding: 0.5em 1em;
    border-radius: 1em;
    border: 0.1em solid ${props => props.border || 'transparent'};
    background-color: ${props => props.bg || BLUE};
    color: ${props => props.color || BEIGE_LIGHT};
    text-transform: uppercase;
`
const Button = (props) => {
    return <StyledButton {...props}/>;
};

export default Button;