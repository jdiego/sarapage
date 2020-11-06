import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Form} from 'react-bootstrap';
import { FaEnvelope, FaMapPin, FaWhatsapp } from 'react-icons/fa'
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
                                href="https://wa.me/+5584999291013?text=I'm%20interested%20in%20your%20car%20for%20sale">
                                    <span><FaWhatsapp size="1.5rem"/></span> 
                                    (84) 99557-0089
                                </S.ContactLink>
                            </li>
                            <li>
                                <span><FaEnvelope size="1.5rem"/></span> 
                                contact@example.com
                            </li>
                        </S.ListIco>
                        
                    </Col>
                </Row>
            </Container>
        </S.SectionContact>
    );
}

export default Contact;