import React from 'react';
import { Container} from '@bootstrap-styled/v4';
import {Navbar, Nav, NavItem, NavbarBrand, NavbarToggler, A, Collapse, NavLink } from '@bootstrap-styled/v4';
//
import './styles.css';
class Topbar extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
        };
    }
    render(){
        return (
            <Navbar id="topBar" toggleable="lg">
                <Container fluid={true}>
                    <div className="d-flex">
                        <NavbarBrand tag={A} to="javascript:;">Brand</NavbarBrand>
                        <NavbarToggler onClick={() => this.setState({ isOpen: !this.state.isOpen })} />
                    </div>
                    <Collapse navbar isOpen={this.state.isOpen} className="justify-content-end">
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
}

export default Topbar;