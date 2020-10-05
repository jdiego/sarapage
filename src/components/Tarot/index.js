import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
//
import * as S from './styled.js';
import Tarot1 from '../../assets/tarot1.png';
import Tarot2 from '../../assets/tarot2.png';
import Tarot3 from '../../assets/tarot3.png';

function Tarot() {

    return (
        <S.SectionTarot>
            <Container className="py-5">

                <Row className="justify-content-center">
                    <Col lg="4" className="mb-4">
                        <Image src={Tarot1} fluid/>
                    </Col>
                    <Col lg="6">
                        <S.CardTarot className="mb-4">
                            <S.CardBlockTarot>
                                <S.CardTextTarot>
                                    As consultas utilizam o Tarot para leitura divinatória e também associo-a
                                    à análise sistêmica dos fatos. O Tarot permite uma avaliação dos fatos para uma tomada
                                    de decisão muito mais assertiva e consciente.
                                </S.CardTextTarot>
                            </S.CardBlockTarot>
                        </S.CardTarot>
                    </Col>
                </Row>

                <Row className="my-5 justify-content-center">
                    <Col lg="6">
                        <S.CardTarot className="mb-4">
                            <S.CardBlockTarot>
                                <S.CardTextTarot>
                                    A leitura de Tarot é baseada numa técnica de tradução das simbologias das figuras das cartas e suas análises combinatórias.
                                    Envolve reflexão e análise junguiana dos arquétipos coletivos.  A leitura tem 1h de duração, onde o consulente poderá fazer
                                    questionamentos ou deixar que o tarot lhe diga o que necessita para aquele momento de sua vida.
                                </S.CardTextTarot>
                            </S.CardBlockTarot>
                        </S.CardTarot>
                    </Col>
                    <Col lg="4">
                        <Image src={Tarot2} fluid></Image>
                    </Col>
                </Row>

                <Row className="my-5 justify-content-center">
                    <Col lg="4" className="mb-4">
                        <Image src={Tarot3} fluid></Image>
                    </Col>
                    <Col lg="6">
                        <S.CardTarot className="mb-4 ">
                            <S.CardBlockTarot>
                                <S.CardTextTarot>
                                Por vezes, ao término da consulta, oriento ao consulente a fazer udo de florais australiano e/ou aromas
                                visando algum tratamento terapêutico. Há também a possibilidade de usar o tarot terapêutico, onde a essência
                                dos Aracanos Maiores é usada como método reflexivo para mapear e trabalhar questões de padrões repetitivos.
                                </S.CardTextTarot>
                            </S.CardBlockTarot>
                        </S.CardTarot>
                    </Col>
                </Row>

            </Container>
        </S.SectionTarot>
    );
}

export default Tarot;
