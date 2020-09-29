import styled from 'styled-components';
import { Navbar, NavItem, NavbarBrand, NavLink } from '@bootstrap-styled/v4';


export const TopBar = styled(Navbar)` 
    background-color: #858CBC;
    color: white !important;
    padding: 0;
    margin: 0;
`
export const TopBrand = styled(NavbarBrand)` 
    font-family: "Ubuntu";
    font-size: 2.5rem;
    font-weight: 600;
    color: white !important;
`

export const TopItem = styled(NavItem)` 
    padding: 0 18px;
    display: inline;
    position: relative;
    overflow: hidden;
    
`
    

export const TopLink = styled(NavLink)` 
    font-size: 1.2rem;
    font-weight: 600;
    color: white !important;
`
