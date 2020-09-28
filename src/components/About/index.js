import React from 'react';
import { Container, Row, Col, Img } from '@bootstrap-styled/v4';

import * as S from './styled.js'
import sara from '../../assets/sara.png'

function About() {
    
    return (
        <S.SectionAbout id="about">
            <Container className="py-5 align-items-center" fluid={false}>
                <Row>
                    <Col lg="6" className="pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <S.About className="text-uppercase"> Sobre </S.About>
                        <S.Lead> 
                            Sou estudiosa das artes divinatórias desde a infância. Astrologia, tarologia, numerologia, banho de ervas 
                            e etc, desde bem pequena. Hoje possuo um curso de astrologia pela Unipaz/RS incompleto, de tarologia, 
                            de constelação familiar sistêmica, de florais australianos e de aromaterapia
                        </S.Lead>
                    </Col>
                    <Col lg="4" className="offset-2 order-1 order-lg-2 about-img">
                        <Img fluid={true} src={sara} className="mx-auto" alt="Sara"/>
                    </Col>
                </Row>
            </Container>
        </S.SectionAbout>
    );
}


export default About;