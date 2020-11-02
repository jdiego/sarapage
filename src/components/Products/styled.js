import styled from 'styled-components';
import { Card, Image } from 'react-bootstrap';


export const SectionProducts = styled.section `
    background-color: #C1C7F3;
    color: white;
`
export const ProductCard = styled(Card) `
    background-color: #858CBC !important;
    transition: transform 0.5s;

    &:hover {
        transform: scale(1.15)
    }
`
export const ProductCardBody = styled(Card.Body) `
`
export const ProductImage = styled(Image) `
    width:100%;
    height:100%;
    object-fit:fill;

`
export const ProductTitle = styled.h1`
    color: #FF3399 !important;
    font-size: 3.0rem;
    line-height: 0.5;   
    font-weight: bold;

`
export const ProductLink = styled.a`
    background-color: #DABFE3 !important;
    color: #FF3399 !important;
`

export const CardTitle = styled(Card.Text)`
    margim-bottom: 0.75rem;
`

