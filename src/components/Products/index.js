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
                        <S.ProductCard className="my-5">
                            <S.ProductCardBody className="text-center">
                                <S.ProductImage src={Image1} fluid/>
                                <Card.Title className="mt-3 text-center">
                                    Card title
                                </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <S.ProductLink href="#" className="btn btn-outline">Go somewhere</S.ProductLink>
                            </S.ProductCardBody>
                        </S.ProductCard>
                    </Col>
                    <Col md="4">
                        <S.ProductCard className="my-5">
                            <S.ProductCardBody className="text-center">
                                <S.ProductImage src={Image2} fluid/>
                                <Card.Title className="mt-3 text-center">
                                    Card title
                                </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <S.ProductLink href="#" className="btn btn-outline">Go somewhere</S.ProductLink>
                            </S.ProductCardBody>
                        </S.ProductCard>
                    </Col>
 
                    <Col md="4">
                        <S.ProductCard className="my-5">
                            <S.ProductCardBody className="text-center">
                                <S.ProductImage src={Image3} fluid/>
                                <Card.Title className="mt-3 text-center">
                                    Card title
                                </Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <S.ProductLink href="#" className="btn btn-outline">Go somewhere</S.ProductLink>
                            </S.ProductCardBody>
                        </S.ProductCard>
                    </Col>
 
                </Row>
            </Container>
        </S.SectionProducts>        
    );
} 

export default Products;