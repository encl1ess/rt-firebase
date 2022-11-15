import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import { LOGIN_ROUTE } from '../utils/utils';
import styled from 'styled-components';
import {BEIGE, BEIGE_LIGHT, BLUE} from '../utils/colors';
import Container from './Container';

const StyledNavbar = styled(Container)`
    width: 100%;
`

const Navbar = () => {
    let user = false;
    return (
        <StyledNavbar bg={BEIGE_LIGHT}>
            
            {user ? 
            <Button>Выйти</Button> 
            :
            <NavLink to={LOGIN_ROUTE}>
                <Button>Войти</Button>
            </NavLink> } 
        </StyledNavbar>
    );
};

export default Navbar;