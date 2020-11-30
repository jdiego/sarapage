import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//
import Tarot2 from '../../assets/tarot2.png';
import * as S from './styled.js';

function NextArrow(props) {
    const { classNameName, style, onClick } = props;
    return (
        <S.Arrow
            classNameName={classNameName}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { classNameName, style, onClick } = props;
    return (
        <S.Arrow
            classNameName={classNameName}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}

function Testimonials() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };

    return (
        <S.SectionTestimonials id="testimonials" classNameName="mb-4 py-5">
            <Container className="my-5">
                <Row>
                    <Col lg="5" md="6">
                        <S.Title className="mt-4"> Depoimentos</S.Title>
                        <S.Devider className="d-inline-block my-3"></S.Devider>
                        <p>
                            Veja o que alguns depoimentos de clientes 
                        </p>
                    </Col>
                    <Col lg="6" className="ml-auto">
                        <S.Carousel {...settings}>
                            <S.CarouselItem>
                                <S.Card >
                                    <div className="p-4">
                                        <S.H5>
                                        Sara, além de ser minha melhor amiga de anos, ela ainda é meu anjo da 
                                        guarda sem asas, meu guia espiritual encarnado e a luz de esclarecimento 
                                        do meu caminho.  Sara é taróloga e tem um dom fora do normal de lhe trazer 
                                        discernimento em meio as atribuições rotineiras.
                                        </S.H5>
                                    </div>
                                </S.Card>
                                <div className="d-flex align-items-center ml-3">
                                    {/* <S.ImageThumb src={Tarot2} alt="" className="rounded-circle mr-3" /> */}
                                    <h6 className="font-weight-bold mb-0">@mallorca</h6>
                                </div>
                            </S.CarouselItem>
                            <S.CarouselItem>
                                <S.Card>
                                    <div className="p-4">
                                        <S.H5>
                                            Um momento incrível, único, sensível e de muitas verdades. A
                                            experiência de refletir sobre você mesmo e sobre aquilo que 
                                            está a sua volta... Sentir o universo e compreender que você
                                            não está sozinho. Somo um pedaço de um todo, e temos a responsabilidade
                                            sobre as coisas e os seres que estão a nossa volta.
                                        </S.H5>
                                    </div>
                                </S.Card>
                                <div className="d-flex align-items-center ml-3">
                                    {/* <S.ImageThumb src={Tarot2} alt="" className="rounded-circle mr-3" /> */}
                                    <h6 className="font-weight-bold mb-0">@phenriquebrito</h6>
                                </div>
                            </S.CarouselItem>
                        <S.CarouselItem>
                            <S.Card>
                                <div className="p-4">
                                    <S.H5>
                                    Não posso dizer que tinha medo, mas apesar de acreditar em astrologia
                                    e muitas outras coisas, nunca tinha experimentado o tarot. Posso dizer
                                    que foi muito revelador e que me ajudou muito a me conhecer melhor.
                                    Quero também salientar o trabalho de Sara, sua técnica, sua leitura,
                                    simplesmente perfeitas.
                                    </S.H5>
                                </div>
                            </S.Card>
                            <div className="d-flex align-items-center ml-3">
                                {/* <S.ImageThumb src={Tarot2} alt="" className="rounded-circle mr-3" /> */}
                                {/* <h6 className="font-weight-bold mb-0">Dexter</h6><S.P13> Dexter</S.P13> */}
                            </div>
                        </S.CarouselItem>
                        </S.Carousel>
                    </Col>
                </Row>
            </Container>
        </S.SectionTestimonials >
    );
}

export default Testimonials;
