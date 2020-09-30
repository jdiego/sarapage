import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
//
import * as S from './styled.js';


function Footer() {
    return (
        <S.SectionFooter>
            <Container>
                <Row>
                    <Col sm="12">
                        <div>
                            Designed by 
                        </div>
                    </Col>
                </Row>
            </Container>
        </S.SectionFooter>
    );
}

export default Footer;