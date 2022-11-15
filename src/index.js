import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled from 'styled-components';
import Container from './components/Container';

const AppWrapper = styled(Container)`
  margin: 0;
  padding: 0;
`
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWrapper direction="column">
      <App />
    </AppWrapper>
  </React.StrictMode>
);

