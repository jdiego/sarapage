import React from 'react';
import { Container, Row, Col, Img } from '@bootstrap-styled/v4';
//
import * as S from './styled.js';
import card from '../../assets/card.png';

function Hero() {
 
    return (
        <S.SectionHero>
            <Container className="py-5" fluid={true}>
                <Row className="align-items-center">
                    <Col lg="6" className="text-center mx-auto">
                        <Img src={card} className="mb-4" alt="Logo Sara"/>
                        <S.Title>Sara Melo</S.Title>
                        <S.Subtitle> Taróloga Sistêmica</S.Subtitle>
                    </Col>
                </Row>
            </Container>
        </S.SectionHero>
    );
}


export default Hero;