import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaAngleDown } from 'react-icons/fa'
//
import * as S from './styled.js';
import card from '../../assets/card.png';

function Hero() {

    return (
        <S.SectionHero>
            <Container className="py-5">
                <Row className="mt-2 align-items-center">
                    <Col lg="6" className="text-center mx-auto">
                        <Image src={card} className="mb-5" alt="Logo Sara"/>
                        <S.Title className="my-5"> Sara Melo</S.Title>
                        <S.Subtitle className="my-5"> Taróloga Sistêmica</S.Subtitle>
                        <FaAngleDown style={{fontSize: '2rem'}}/>
                    </Col>
                </Row>
            </Container>
        </S.SectionHero>
    );
}


export default Hero;
