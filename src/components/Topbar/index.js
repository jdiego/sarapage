import React, {useState} from 'react';
import { Container, Navbar, Nav, NavItem, NavbarBrand, NavbarToggler, A, Collapse, NavLink } from '@bootstrap-styled/v4';


import './styles.css';

function Topbar() {

   const [ isOpen, setIsOpen ] = useState(false);


    return (
        <Navbar id="topBar" toggleable="lg">

            <Container fluid={true}>

                <div className="d-flex">
                    <NavbarBrand tag={A} to="#">Brand</NavbarBrand>
                    <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                </div>

                <Collapse navbar isOpen={isOpen} className="justify-content-end">
                    <Nav navbar>
                        <NavItem>
                            <NavLink>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Sobre</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Depoimentos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Produtos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Contatos</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>

            </Container>

        </Navbar>
                
    );
}

export default Topbar;