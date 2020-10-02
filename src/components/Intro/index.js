import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaShareAlt, FaSmile } from 'react-icons/fa'
import { MdTrendingUp } from 'react-icons/md'
//
import * as S from './styled.js';

function Intro() {

    return (
        <S.SectionIntro>
            <Container className="py-5">
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

                    <S.Wrapper className = "mt-5">
                        <Row className = "p-5">

                            <S.BenefitsCol lg="4">
                                <S.IconCircle>
                                    <FaShareAlt style={{color:"#555ea0", fontSize:"1.5rem"}}/>
                                </S.IconCircle>
                                <h3>Autoconhecimento</h3>
                                <p>Se conheça mais</p>.
                            </S.BenefitsCol>

                            <S.BenefitsCol lg="4">
                                <S.IconCircle>
                                    <MdTrendingUp style={{color:"#555ea0", fontSize:"1.5rem"}}/>
                                </S.IconCircle>
                                <h3>Desenvolvimento</h3>
                                <p> Esteja em constante melhoria </p>.
                            </S.BenefitsCol>

                            <S.BenefitsCol lg="4">
                                <S.IconCircle>
                                    <FaSmile style={{color:"#555ea0", fontSize:"1.5rem"}}/>
                                </S.IconCircle>
                                <h3>Consciência</h3>
                                <p> Perceba e esteja presente no agora </p>.
                            </S.BenefitsCol>
                        </Row>
                    </S.Wrapper>

            </Container>
        </S.SectionIntro>
    );
}

export default Intro;
