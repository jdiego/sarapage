import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Form} from 'react-bootstrap';
import { FaEnvelope, FaInstagram, FaMapPin, FaWhatsapp } from 'react-icons/fa'
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
                {/* <Row className="my-5">
                    <Col md="12">
                        <S.ContactTitle className="text-uppercase">Contate a gente</S.ContactTitle>
                    </Col>
                </Row> */}
                <Row className="mt-5">
                    <Col md="6" className="mb-4">
                        <ContactMap/>
                    </Col>
                          
                    <Col md="6">
                        <S.ContactSubTitle> 
                            <span role="img" aria-label="stars emoji">✨</span> 
                            Entre em contato
                        </S.ContactSubTitle>
                        <S.ListIco>
                            <li>
                                <span><FaMapPin size="1.5rem"/></span> 
                                329 WASHINGTON ST BOSTON, MA 02108
                            </li>
                            <li>
                                <S.ContactLink 
                                href="https://wa.me/+55849665-0333?text=Olá%20Sara">
                                    <span><FaWhatsapp size="1.5rem"/></span> 
                                    (84) 9665-0333
                                </S.ContactLink>
                            </li>
                            <li>
                                <S.ContactLink href="https://www.instagram.com/asuaterapeuta/">
                                    <span><FaInstagram size="1.5rem"/></span> @asuaterapeuta
                                </S.ContactLink>
                                
                            </li>
                        </S.ListIco>
                        
                    </Col>
                </Row>
            </Container>
        </S.SectionContact>
    );
}

export default Contact;