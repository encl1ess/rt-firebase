import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import { LOGIN_ROUTE } from '../utils/utils';
import styled from 'styled-components';
import {BEIGE, BEIGE_LIGHT, BLUE} from '../utils/colors';
import Container from './Container';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';


const StyledNavbar = styled(Container)`
    width: 100%;
`

const Navbar = () => {
    const {auth} = React.useContext(Context);
    const [user] = useAuthState(auth);
    
    return (
        <StyledNavbar bg={BEIGE_LIGHT}>
            
            {user ? 
            <Button onClick={()=>auth.signOut()}>Выйти</Button> 
            :
            <NavLink to={LOGIN_ROUTE}>
                <Button>Войти</Button>
            </NavLink> } 
        </StyledNavbar>
    );
};

export default Navbar;