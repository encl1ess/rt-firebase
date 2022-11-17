import React from 'react';
import styled, { css } from 'styled-components';
import { BLUE} from '../utils/colors';
import Container from './Container';


const MsgContainer = styled(Container)`
    width: fit-content;
    max-width: 75%;
    height: fit-content;
    overflow: hidden;
    background-color: ${props => props.bg || BLUE};
    color: white;
    flex-shrink: 0;
    padding:  0.5em 0;
    

    ${props => props.received && css`
        background-color: white;
        color: ${BLUE};
        border-top-right-radius: 1em;
        border-bottom-right-radius: 1em;
        align-self: flex-start;
        padding-right: 1em;
        text-align: left;
    `}

    ${props => props.sent && css`
        background-color: ${BLUE};
        color: white;
        border-top-left-radius: 1em;
        border-bottom-left-radius: 1em;
        align-self: flex-end;
        flex-direction: row-reverse;
        padding-left: 1em;       
        text-align: right;
    `}
`
const UserName = styled.div`
    text-decoration: underline;
    font-size: 0.8em;
    font-weight: 600;
`
const Avatar = styled.img`
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    margin: 0 0.5em;
`

const Message = (props) => {
    const {name, photoURL, message} = props.message;


    return (
        <MsgContainer align="flex-start" justify="end" {...props}>
            <Avatar src={photoURL} />
            <Container direction="column" align={props.sent ? "flex-end" : "flex-start"}>
                <UserName>{name}</UserName>
                <div>{message}</div>
            </Container>
           
        </MsgContainer>
    );
};

export default Message;