import React from 'react';
import { Container, Row, Col } from '@bootstrap-styled/v4';
//
import * as S from './styled.js';

function Intro() {
 
    return (
        <S.SectionIntro>
            <Container className="py-5" fluid={false}>
                <Row>
                    <Col className="text-center">
                        <S.Lead>
                        O Tarot é uma ferramenta de autoconhecimento com 78 cartas, por meio da qual podemos fazer previsões. Assim, 
                        algo pode ser <S.Highlight>PRÉ-VISTO</S.Highlight> e, com isso, <S.Highlight>PRÉ-ANALISADO</S.Highlight>, 
                        para que, com nosso livre arbítrio, tenhamos <S.Highlight>CONSCIÊNCIA</S.Highlight> e 
                        possamos fazer <S.Highlight>ESCOLHAS</S.Highlight> melhores
                        </S.Lead>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col lg="4">
                        <h2>Autoconhecimento</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies 
                            vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna
                        </p>.
                    </Col>
                    <Col lg="4">
                        <h2>Desenvolvimento</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies 
                            vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna
                        </p>.
                    </Col>
                    <Col lg="4">
                        <h2>Consciência</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies 
                            vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna
                        </p>.
                    </Col>
                </Row>
            </Container>
        </S.SectionIntro>
    );
}

export default Intro;