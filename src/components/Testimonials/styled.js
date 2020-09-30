import styled from 'styled-components';
import { Image} from 'react-bootstrap';
import Slider from "react-slick";

export const SectionTestimonials = styled.section `
    background-color: white;
    font-family: 'Comfortaa', cursive;
    font-weight: 300;
`
export const Carousel = styled(Slider) `
`
export const CarouselItem = styled.div `
`

export const ImageThumb = styled(Image) `
    border-radius: 50%;
    width: 78px !important;
`
export const Arrow = styled.div `
    display: block;
    &:before{
        color: #C1C7F3 !important;
    }
`
export const Dots = styled.div `
    position: absolute;
    left: -108%;
    top: 70%;
`
export const Devider = styled.div `
    height: 2px;
    width: 40px;
`

export const Card = styled.div `
    -webkit-box-shadow: 0px 0px 30px rgba(115, 128, 157, 0.1);
    box-shadow: 0px 0px 30px rgba(115, 128, 157, 0.1);
    background-color: #DABFE3 !important;

    &:after {
        position: absolute;
        bottom: -15px;
        left: 35px;
        content: '';
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-top: 15px solid #ffffff;
    }
`
export const H5 = styled.h5 `
	line-height: 30px;
	font-size: 18px;
`

export const P13 = styled.span `
	font-size: 13px;
`