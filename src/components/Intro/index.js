import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaShareAlt, FaSmile } from 'react-icons/fa'
import { MdTrendingUp } from 'react-icons/md'
//
import * as S from './styled.js';

function Intro() {

    return (
        <S.SectionIntro>
            <Container className="py-5 mb-5">
                <Row>
                    <Col className="text-center">
                        <S.Lead>
                        O Tarot é uma ferramenta de autoconhecimento com 78 cartas, por meio da qual podemos fazer previsões. Assim,
                        algo pode ser PRÉ-VISTO e, com isso, PRÉ-ANALISADO,
                        para que, com nosso livre arbítrio, tenhamos CONSCIÊNCIA e
                        possamos fazer ESCOLHAS melhores
                        </S.Lead>
                    </Col>
                </Row>
            </Container>
            <S.WaveContainer>
                <S.Wave></S.Wave>
                <S.Wrapper>
                        <Row>
                            <S.BenefitsCol lg="4" >
                                <S.IconCircle style={{background: "#926FF6"}}>
                                    <FaShareAlt style={{color: "white", fontSize:"1.5rem"}}/>
                                </S.IconCircle>
                                <h3>Autoconhecimento</h3>
                                <p>Se conheça mais</p>.
                            </S.BenefitsCol>

                            <S.BenefitsCol lg="4">
                                <S.IconCircle style={{background: "#F3849F"}}>
                                    <MdTrendingUp style={{color: "white", fontSize:"1.5rem"}}/>
                                </S.IconCircle>
                                <h3>Desenvolvimento</h3>
                                <p> Esteja em constante melhoria </p>.
                            </S.BenefitsCol>

                            <S.BenefitsCol lg="4">
                                <S.IconCircle style={{background: "#79CFFF"}}>
                                    <FaSmile style={{color:"white", fontSize:"1.5rem"}}/>
                                </S.IconCircle>
                                <h3>Consciência</h3>
                                <p> Perceba e esteja presente no agora </p>.
                            </S.BenefitsCol>
                        </Row>
                    </S.Wrapper>
            </S.WaveContainer>
            
        </S.SectionIntro>
    );
}

export default Intro;
