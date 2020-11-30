import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

import * as S from './styled.js';

function Topbar() {

    return (
        <S.TopBar expand="lg">
            <S.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <S.TopItem>
                        <S.TopLink href="#">Home</S.TopLink>
                    </S.TopItem>
                    <S.TopItem>
                        <S.TopLink href="#about">Sobre</S.TopLink>
                    </S.TopItem>
                    <S.TopItem>
                        <S.TopLink href="#testimonials">Depoimentos</S.TopLink>
                    </S.TopItem>
                    <S.TopItem>
                        <S.TopLink href="#products">Produtos</S.TopLink>
                    </S.TopItem>
                    <S.TopItem>
                        <S.TopLink href="#contact">Contatos</S.TopLink>
                    </S.TopItem>
                </Nav>
            </Navbar.Collapse>
        </S.TopBar>
    );
}

export default Topbar;