import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components';
import { Context } from '..';
import {BEIGE, BEIGE_LIGHT, BLUE } from '../utils/colors';
import Container from './Container';
import Input from './Input';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query} from "firebase/firestore"; 
import Loader from './Loader';
import Message from './Message';


const ChatWrapper = styled(Container)`
    margin: 2em 0 1em;
    min-height: 60vh;
    height: 75vh;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    border: 0.15em solid ${BLUE};
    overflow-y: auto;
    gap: 1em;
    padding-bottom: 0.5em;
 
    &::-webkit-scrollbar {
        width: 1.5em;
        background: ${BEIGE_LIGHT};
        border-top-right-radius: 1em;
    }
    &::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 1em 1em ${BLUE};
        border: solid 0.2em transparent;
        border-radius: 1em;
        initial: 100;
    }
`

const Chat = () => {
    const {auth, firestore} = React.useContext(Context);
    const [user] = useAuthState(auth);

    const [messages, loading] = useCollectionData(query(collection(firestore, 'messages'),orderBy('createdAt')));
    if(loading) return <Loader/>
    return (
        <Container direction="column" width="60%">
            <ChatWrapper bg={BEIGE} direction="column" justify="start" width="100%" > 
                {messages.map((message, index) => 
                user.uid === message.uid 
                ?  
                <Message sent message={message} key={index}/>
                :
                <Message received message={message} key={index}/>
                )}
               
            </ChatWrapper> 
            <Input /> 
        </Container>
    );
};

export default Chat;