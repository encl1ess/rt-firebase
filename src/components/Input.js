import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Context } from '..';
import { BEIGE, BLUE } from '../utils/colors';
import Button from './Button';
import Container from './Container';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth';


const InputContainer = styled(Container)`
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
    overflow: hidden;
    border: 0.15em solid ${BLUE};
    height: 6vh;
    max-height: 50px;
    min-height: 30px;
    align-items: center;
`
const StyledInput = styled.textarea`
    width: 80%;
    height: 100%;
    max-height: inherit;
    border: none;
    overflow-wrap: break-word;
    resize: none;
    padding: 0 1.1em;
    font-size: 0.95em;
    outline: none;
    padding-top: 0.6em;
    &::-webkit-scrollbar {
        width: 1em;
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 1em 1em ${BLUE};
        border: solid 0.2em transparent;
        border-radius: 1em;
    }
 
`
const StyledButton = styled(Button)`
    margin: 0;
    border-radius: 0;
    width: 20%;
    height: 100%;
    outline: 0.15em solid ${BLUE};

    &:hover:enabled{
        background-color: ${BEIGE};
    }
    &:disabled {
        background-color: grey;
        color: #D3D3D3;
    }
`
const Input = () => {
    const { auth, firestore } = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');

    const sendMsg = async () => {
        setValue('');
        await addDoc(collection(firestore, 'messages'), {
            uid: user.uid,
            name: user.displayName,
            photoURL: user.photoURL,
            message: value,
            createdAt: serverTimestamp()
        });
        
    }
    return (
        <InputContainer justify="space-between" >
            <StyledInput rows="2"
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyDown={event => {
                    if(event.keyCode === 13) {
                        setValue("");
                        sendMsg();
                    }    
                }}
            />

            <StyledButton disabled = {!value || !value.trim() ? true : false} onClick={sendMsg}>Send</StyledButton>
        </InputContainer>
    );
};

export default Input;