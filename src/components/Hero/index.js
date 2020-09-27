import React from 'react';
import { Container, Row, Col, Section } from '@bootstrap-styled/v4';
import './styles.css';
function Hero(){
    return (
        <section id="title">
            <Container className="bg-primary" fluid={true}>
                <Row>
                    <Col lg="6" className="mx-auto">
                        <h1 className="title">Sara Melo</h1>
                        <h2> Taro sistêmcia</h2>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Hero;