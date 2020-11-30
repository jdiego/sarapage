import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import * as S from './styled.js'
import sara from '../../assets/sara.png'

function About() {

    return (
        <S.SectionAbout id="about">
            <Container className="py-5 align-items-center">
                <Row>
                    <Col lg="6" className="pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <S.About > Sobre </S.About>
                        <S.Lead className="my-5 text-justify">
                        Sou estudiosa das artes divinatórias, desde a infância, e tenho fascínio pelas ciências, técnicas e estudos relativos ao 
                        autoconhecimento. Foi em meio a essa busca de crescimento pessoal que o Tarot entrou na minha vida para ficar. Por meio da 
                        leitura do Tarot, venho orientando pessoas, proporcionando direcionamento e trazendo reflexões de forma positiva e libertadora. 
                        Permita-se! 
                        </S.Lead>
                    </Col>
                    <Col lg="4" className="offset-2 order-1 order-lg-2 my-auto  about-img">
                        <Image fluid src={sara} className="mx-auto" alt="Sara"/>
                    </Col>
                </Row>
            </Container>
        </S.SectionAbout>
    );
}


export default About;
