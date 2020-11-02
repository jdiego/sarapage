import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Form} from 'react-bootstrap';
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa'
//
import * as S from './styled.js';
import ContactMap from '../ContactMap';

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
                    <Col>
                        <ContactMap/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <S.ContactSubTitle>Entre em contato</S.ContactSubTitle>
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