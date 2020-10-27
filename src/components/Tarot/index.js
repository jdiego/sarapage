import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
//
import * as S from './styled.js';
import Tarot2 from '../../assets/tarot2.png';

function Tarot() {

    return (
        <S.SectionTarot>
            <Container className="py-5">

                <Row className="my-4 justify-content-center">
                    <Col lg="6">
                        <S.CardTarot className="mb-4">
                            <S.CardBlockTarot>
                                <S.CardTextTarot className = "text-justify">
                                    A minha leitura de Tarot baseia-se na técnica de interpretação simbólica das cartas e suas análises combinatórias.
                                    Para tanto, utilizo reflexões da Psicologia Analítica sobre os Arquétipos Coletivos e a Análise Sistêmica dos fatos.
                                    Assim, o consulente poderá fazer perguntas ou, simplesmente, deixar que o Tarot lhe revele o que necessita saber naquele momento da sua vida.
                                </S.CardTextTarot>
                            </S.CardBlockTarot>
                        </S.CardTarot>
                    </Col>
                    <Col className = "offset-1 order-1 order-lg-2 my-auto" lg="4">
                        <Image className = "my-auto mx-auto" src={Tarot2} fluid></Image>
                    </Col>
                </Row>

            </Container>
        </S.SectionTarot>
    );
}

export default Tarot;
