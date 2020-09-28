import React, {useState} from 'react';
import { Container, Nav, NavbarToggler, Collapse } from '@bootstrap-styled/v4';

import * as S from './styled.js';

function Topbar() {

    const [ isOpen, setIsOpen ] = useState(false);


    return (
        <S.TopBar toggleable="lg">

            <Container fluid={true}>

                <div className="d-flex">
                    {/* <S.TopBrand tag={A} to="#">Brand</S.TopBrand> */}
                    <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                </div>

                <Collapse navbar isOpen={isOpen} className="justify-content-end">
                    <Nav navbar>
                        <S.TopItem>
                            <S.TopLink href="#">Home</S.TopLink>
                        </S.TopItem>
                        <S.TopItem>
                            <S.TopLink href="#about">Sobre</S.TopLink>
                        </S.TopItem>
                        <S.TopItem>
                            <S.TopLink href="#">Depoimentos</S.TopLink>
                        </S.TopItem>
                        <S.TopItem>
                            <S.TopLink href="#">Produtos</S.TopLink>
                        </S.TopItem>
                        <S.TopItem>
                            <S.TopLink href="#">Contatos</S.TopLink>
                        </S.TopItem>
                    </Nav>
                </Collapse>

            </Container>

        </S.TopBar>
                
    );
}

export default Topbar;