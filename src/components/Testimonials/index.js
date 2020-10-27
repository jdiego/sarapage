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
        <S.SectionTestimonials classNameName="mb-4 py-5">
            <Container className="my-5">
                <Row>
                    <Col lg="5" md="6">
                        <S.Title className="mt-4"> Depoimentos</S.Title>
                        <S.Devider className="d-inline-block my-3"></S.Devider>
                        <p>We care what our customers think of us and so should you. 
                            We are partners in your business and your success.
                        </p>
                    </Col>
                    <Col lg="6" className="ml-auto">
                        <S.Carousel {...settings}>
                            <S.CarouselItem>
                                <S.Card >
                                    <div className="p-4">
                                        <S.H5>WrapKit has given our websites huge national presence.
                                        We are #1 on page one in Google search results for every website we’ve built,
                                        and rank for more keywords than I ever expected in a very competitive, high-value
                                        customer industry. In
                                        addition.</S.H5>
                                    </div>
                                </S.Card>
                                <div className="d-flex align-items-center ml-3">
                                    <S.ImageThumb src={Tarot2} alt="" className="rounded-circle mr-3" />
                                    <h6 className="font-weight-bold mb-0">Mrs. Anderson</h6> <S.P13> Matrix</S.P13>
                                </div>
                            </S.CarouselItem>
                            <S.CarouselItem>
                                <S.Card>
                                    <div className="p-4">
                                        <S.H5>WrapKit has given our websites huge national presence.
                                        We are #1 on page one in Google search results for every website we’ve built,
                                        and rank for more keywords than I ever expected in a very competitive, high-value
                                        customer industry. In
                                        addition.</S.H5>
                                    </div>
                                </S.Card>
                                <div className="d-flex align-items-center ml-3">
                                    <S.ImageThumb src={Tarot2} alt="" className="rounded-circle mr-3" />
                                    <h6 className="font-weight-bold mb-0">Jane Doe</h6><S.P13> Blindspot</S.P13>
                                </div>
                            </S.CarouselItem>
                        <S.CarouselItem>
                            <S.Card>
                                <div className="p-4">
                                    <S.H5>WrapKit has given our websites huge national presence.
                                    We are #1 on page one in Google search results for every website we’ve built,
                                    and rank for more keywords than I ever expected in a very competitive, high-value
                                    customer industry. In
                                        addition.</S.H5>
                                </div>
                            </S.Card>
                            <div className="d-flex align-items-center ml-3">
                                <S.ImageThumb src={Tarot2} alt="" className="rounded-circle mr-3" />
                                <h6 className="font-weight-bold mb-0">Dexter</h6><S.P13> Dexter</S.P13>
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
