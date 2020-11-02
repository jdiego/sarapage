import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
//
import * as S from './styled.js';
import Image1 from '../../assets/service1.png';
import Image2 from '../../assets/service2.png';
import Image3 from '../../assets/service3.png';

function Products() {
    return (
        <S.SectionProducts id="products" className="py-5">
            <Container>
                <Row>
                    <Col className="my-auto">
                        <S.ProductTitle>Serviços</S.ProductTitle>
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                        <S.ProductCard className="my-5 mx-2 p-2">
                            <S.ProductCardBody className="text-center">
                                <S.ProductImage src={Image1} fluid/>
                                <Card.Title className="mt-3 text-center">
                                    Consulta Online 30 Minutos 
                                </Card.Title>
                                <Card.Text>
                                    <h2 class="card-title pricing-card-title">R$120</h2>
                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li>30 minutos de consulta</li>
                                        <li>Suporte total via Whatsapp</li>
                                    </ul>
                                </Card.Text>
                                <S.ProductLink href="#" className="btn btn-outline">Agendar</S.ProductLink>
                            </S.ProductCardBody>
                        </S.ProductCard>
                    </Col>
                    <Col md="4">
                        <S.ProductCard className="my-5 mx-2 p-2">
                            <S.ProductCardBody className="text-center">
                                <S.ProductImage src={Image2} fluid/>
                                <Card.Title className="mt-3 text-center">
                                    Consulta Online 60 Minutos
                                </Card.Title>
                                <Card.Text>
                                    <h2 class="card-title pricing-card-title">R$200</h2>
                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li>1 Hora de consulta</li>
                                        <li>Suporte total via Whatsapp</li>
                                    </ul>
                                </Card.Text>
                                <S.ProductLink href="#" className="btn btn-outline">Agendar</S.ProductLink>
                            </S.ProductCardBody>
                        </S.ProductCard>
                    </Col>
 
                    <Col md="4">
                        <S.ProductCard className="my-5 mx-2 p-2">
                            <S.ProductCardBody className="text-center">
                                <S.ProductImage src={Image3} fluid/>
                                <Card.Title className="mt-3 text-center">
                                    Consulta Presencial 60 minutos
                                </Card.Title>
                                <Card.Text>
                                    <h2 class="card-title pricing-card-title">R$250</h2>
                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li>1 Hora de consulta</li>
                                        <li>Atendimento presencial</li>
                                    </ul>
                                </Card.Text>
                                <S.ProductLink href="#" className="btn btn-outline">Agendar</S.ProductLink>
                            </S.ProductCardBody>
                        </S.ProductCard>
                    </Col>
 
                </Row>
            </Container>
        </S.SectionProducts>        
    );
} 

export default Products;