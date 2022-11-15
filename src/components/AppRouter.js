import React from 'react';
import Chat from './Chat';
import {
    Routes,
    Route
  } from "react-router-dom";
import { privateRoutes, publicRoutes } from '../routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/utils';
import Login from './Login';
const AppRouter = () => {
    const user = false;
    return user ? (
        <Routes>
            {privateRoutes.map(({path, Component}, index)=>
                <Route path={path} element={<Component/>} exact key={index}/>
            )}
            <Route path='*' element=<Chat/> exact />
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map(({path, Component}, index)=>
                <Route path={path} element={<Component/>} exact key={index}/>
            )}
                <Route path='*' element=<Login/> exact/>
        </Routes>
    );
};

export default AppRouter;