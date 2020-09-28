import styled from 'styled-components';
import { Navbar, NavItem, NavbarBrand, NavLink } from '@bootstrap-styled/v4';

export const TopBar = styled(Navbar)` 
    background-color: #858CBC;
    color: white;
    padding: 0;
    margin: 0;
`
export const TopBrand = styled(NavbarBrand)` 
    font-family: "Ubuntu";
    font-size: 2.5rem;
    font-weight: bold;
`

export const TopItem = styled(NavItem)` 
    padding: 0 18px;
`
    

export const TopLink = styled(NavLink)` 
    font-size: 1.2rem;
    font-weight: lighter;
    color: white ;
    padding: 10px 15px;
    
`
