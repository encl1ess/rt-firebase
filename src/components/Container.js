import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'center'};
    align-items: ${props => props.align || 'center'};
    background: ${props => props.bg || 'transparent'};
    padding: 1em;
`
const Container = (props) => {
    return <StyledContainer {...props}/>
};

export default Container;