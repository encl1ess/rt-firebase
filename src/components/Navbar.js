import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import { LOGIN_ROUTE } from '../utils/utils';
import styled from 'styled-components';
import {BEIGE} from '../utils/colors';
import Container from './Container';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';


const StyledNavbar = styled(Container)`
    width: 100%;
    min-height: 50px;
    height: 9vh;
`

const Navbar = () => {
    const {auth} = React.useContext(Context);
    const [user] = useAuthState(auth);
    
    return (
        <StyledNavbar bg={BEIGE} justify="end">
            {user ? 
            <Button onClick={()=>auth.signOut()}>sign out</Button> 
            :
            <NavLink to={LOGIN_ROUTE}>
                <Button>sign in</Button>
            </NavLink> } 
        </StyledNavbar>
    );
};

export default Navbar;