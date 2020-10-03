import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Form} from 'react-bootstrap';
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa'
//
import * as S from './styled.js';
function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  
  
function Contact(){
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);
  
    const handleClick = () => setLoading(true);

    return (
        <S.SectionContact id="contact" className="py-5">
            <Container>
                <Row className="my-5">
                    <Col md="12">
                        <S.ContactTitle className="text-uppercase">Contate a gente</S.ContactTitle>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md="6">
                        <S.ContactSubTitle className="mb-5">
                            Ennvie uma mensagem 
                        </S.ContactSubTitle>
                        <Form>
                            <Row>
                                <Col md="12" className="mb-3">
                                    <Form.Group controlId="formContactUse">
                                        <Form.Control type="text" placeholder="Seu nome" />
                                    </Form.Group>
                                </Col>
                                <Col md="12" className="mb-3">
                                    <Form.Group controlId="formContactUse">
                                        <Form.Control type="email" placeholder="Seu e-mail" />
                                    </Form.Group>
                                </Col>
                                <Col md="12" className="mb-3">
                                    <Form.Group controlId="formContactUse">
                                        <Form.Control type="text" placeholder="Sua mensagem" />
                                    </Form.Group>
                                </Col>
                                <Col md="12" className="mb-3 text-center">
                                    <S.ContactButton  variant="primary-outline" size="lg" disabled={isLoading} onClick={!isLoading ? handleClick : null}>
                                        {isLoading ? 'Enviando…' : 'Enviar Mensagem'}
                                    </S.ContactButton>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col md="6">
                        <S.ContactSubTitle>Entre em contato</S.ContactSubTitle>
                        <S.ContactBox className="mt-5 pt-4 pt-md-0">
                            <p className="lead">

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorum dolorem soluta quidem
                                expedita aperiam aliquid at.
                                Totam magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis
                                mollitia inventore?
                            </p>
                        </S.ContactBox>
                        <S.ListIco>
                            <li><span><FaLocationArrow/></span> 329 WASHINGTON ST BOSTON, MA 02108</li>
                            <li><span><FaPhone/></span> (617) 557-0089</li>
                            <li><span><FaEnvelope/></span> contact@example.com</li>
                        </S.ListIco>
                        
                    </Col>
                </Row>
            </Container>
        </S.SectionContact>
    );
}

export default Contact;