import React from 'react';
import Chat from './Chat';
import {
    Routes,
    Route
  } from "react-router-dom";
import { privateRoutes, publicRoutes } from '../routes';
import {useAuthState} from 'react-firebase-hooks/auth'
import Login from './Login';
import { Context } from '..';


const AppRouter = () => {
    const {auth} = React.useContext(Context);
    const [user] = useAuthState(auth);
    return user ? (
        <Routes>
            {privateRoutes.map(({path, Component}, index)=>
                <Route path={path} element={<Component/>} exact key={path}/>
            )}
            <Route path='*' element=<Chat/> exact />
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map(({path, Component}, index)=>
                <Route path={path} element={<Component/>} exact key={path}/>
            )}
                <Route path='*' element=<Login/> exact/>
        </Routes>
    );
};

export default AppRouter;