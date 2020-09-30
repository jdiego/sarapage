import styled from 'styled-components';
import { Nav, Navbar} from 'react-bootstrap';


export const TopBar = styled(Navbar)` 
    background-color: #858CBC;
    color: white !important;
    padding: 0;
    margin: 0;
`

export const Toggle = styled(Navbar.Toggle)` 
    background-color: #DABFE3 !important;
`
export const TopItem = styled(Nav.Item)` 
    padding: 0 18px;
    display: inline;
    position: relative;
    overflow: hidden;
    
`

export const TopLink = styled(Nav.Link)` 
    font-size: 1.2rem;
    font-weight: 600;
    color: white !important;
`
