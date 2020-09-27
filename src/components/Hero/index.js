import React from 'react';
import { Container, Row, Col, Section, Img } from '@bootstrap-styled/v4';
import {Navbar, Nav, NavItem, NavbarBrand, NavbarToggler, A, Collapse, NavLink } from '@bootstrap-styled/v4';
//
import './styles.css';
import card from '../../pages/assets/card.png';
class Hero extends React.Component {
    constructor() {
        super();
        this. state = {
            isOpen: false,
        };
    }
    render(){
        return (
            <Section id="title">
                <Container className="" fluid={true}>
                    <Navbar expand-lg light toggleable="lg">
                        <Container>
                            <div className="d-flex justify-content-between">
                                <NavbarBrand tag={A} to="javascript:;">Brand</NavbarBrand>
                                <NavbarToggler onClick={() => this.setState({ isOpen: !this.state.isOpen })} />
                            </div>
                            <Collapse navbar isOpen={this.state.isOpen}>
                                <Nav navbar className="mr-auto">
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
                    <Row>
                        <Col lg="6" className="text-center mb-4">
                            <Img src={card} className="mb-4" alt="Logo Sara"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="6" className="mx-auto">
                            <h1 className="title">Sara Melo</h1>
                            <h2> Taro sistêmcia</h2>
                        </Col>
                    </Row>
                </Container>
            </Section>
        );
    }
}

export default Hero;