import React from 'react';
import { Container, Row, Col, Section, Img } from '@bootstrap-styled/v4';
//
import './styles.css';
import sara from '../../pages/assets/sara.png'
class About extends React.Component {
    render(){
        return (
            <Section id="about">
                <Container className="py-5 align-items-center" fluid={false}>
                    <Row>
                        <Col lg="6" className="pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1 className="text-pink text-uppercase"> Sobre </h1>
                            <p className="lead"> 
                                Sou estudiosa das artes divinatórias desde a infância. Astrologia, tarologia, numerologia, banho de ervas 
                                e etc, desde bem pequena. Hoje possuo um curso de astrologia pela Unipaz/RS incompleto, de tarologia, 
                                de constelação familiar sistêmica, de florais australianos e de aromaterapia
                            </p>
                        </Col>
                        <Col lg="4" className="offset-2 order-1 order-lg-2 about-img">
                            <Img fluid={true} src={sara} className="mx-auto" alt="Sara"/>
                        </Col>
                    </Row>
                </Container>
            </Section>
        );
    }
}

export default About;