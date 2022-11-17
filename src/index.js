import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled from 'styled-components';
import Container from './components/Container';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { BEIGE_LIGHT } from './utils/colors';


const firebaseApp = initializeApp({
  apiKey: "AIzaSyBt_IvVcbO_3qgcWMP9p71HV8BBiGY54L0",
  authDomain: "rt-chat-f2815.firebaseapp.com",
  projectId: "rt-chat-f2815",
  storageBucket: "rt-chat-f2815.appspot.com",
  messagingSenderId: "734459859815",
  appId: "1:734459859815:web:c018535a6f9d3dee3995c2",
  measurementId: "G-H6Y348C259"
});

const firestore = getFirestore(firebaseApp);
const auth = getAuth();

const Context = React.createContext(null)

const AppWrapper = styled(Container)`
  min-height: 100vh;
  max-height: fit-content;
  margin: 0;
  padding: 0;
`
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppWrapper direction="column" bg={BEIGE_LIGHT} justify="start">
      <Context.Provider value={
        {
          firebaseApp, 
          firestore, 
          auth
          }}>
        <App />
      </Context.Provider>
    </AppWrapper>
);

export {Context};
