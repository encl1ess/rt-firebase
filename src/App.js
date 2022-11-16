
import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import { Context } from '.';
import {useAuthState} from 'react-firebase-hooks/auth';
import Loader from './components/Loader';

function App() {
  const {auth} = React.useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if(loading) return <Loader/>
  return (
    <Router>
      <Navbar/>
      <AppRouter/>
    </Router>
  );
}

export default App;
