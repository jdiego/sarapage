import styled from 'styled-components';
import { Card } from 'react-bootstrap';


export const SectionTarot = styled.section`
    background-color: #C1C7F3;
    color: white;
    font-family: 'Comfortaa', cursive;
`

export const DivTarot =  styled.div `
    background-color: #DABFE3;
`

export const CardTarot = styled(Card) `
    background-color: #DABFE3 !important;
    height: 20rem;
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.2);
    overflow:auto;

`
export const CardBlockTarot = styled(Card.Body) `
 
`
export const CardTextTarot = styled(Card.Text) `
    color: #555ea0;
    font-size: 1.2rem;
 
`