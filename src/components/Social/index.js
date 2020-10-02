import React from 'react';
import { Container, Row, Col,} from 'react-bootstrap';
import InstagramEmbed from 'react-instagram-embed';
//
import * as S from './styled.js';

function Social() {
    return (
        <S.SectionSocial id="social" className="py-5">
            <Container>
                <Row>
                    <Col className="my-auto mb-4">
                        <S.Title>Nas redes sociais</S.Title>
                    </Col>
                </Row>
                <Row>
                    <Col md="10" className="mt-5 mx-auto text-center">
                        <InstagramEmbed
                            url='https://instagr.am/p/Zw9o4/'
                            maxWidth={320}
                            hideCaption={false}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => { }}
                            onSuccess={() => { }}
                            onAfterRender={() => { }}
                            onFailure={() => { }}
                        />
                    </Col>
                </Row>
            </Container>
        </S.SectionSocial>
    );
}

export default Social;
