import React from 'react';
import { Container, Row, Col, Section, Img } from '@bootstrap-styled/v4';
//
import './styles.css';
import card from '../../pages/assets/card.png';
class Hero extends React.Component {
    render(){
        return (
            <Section id="hero">
                <Container className="py-5" fluid={true}>
                    <Row className="align-items-center">
                        <Col lg="6" className="text-center mx-auto">
                            <Img src={card} className="mb-4" alt="Logo Sara"/>
                            <h1 className="section-title">Sara Melo</h1>
                            <h2 className="section-subtitle"> Taróloga Sistêmica</h2>
                        </Col>
                    </Row>
                </Container>
            </Section>
        );
    }
}

export default Hero;