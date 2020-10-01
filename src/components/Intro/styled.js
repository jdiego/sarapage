import styled from 'styled-components';
import { Container, Col } from 'react-bootstrap';


export const SectionIntro = styled.section `
    background-color: #858CBC;
    color: white;
`
export const Lead = styled.p `
    font-size: 2.0rem;
    line-height: 1.5;
    /* font-family: 'Comfortaa', cursive; */
    text-align: justify;
    text-justify: inter-word;
`
export const Highlight = styled.span `
    background-color: rgb(218,191,227, 0.6);
    padding: 0.3rem;
    color: white;
`

export const Wrapper = styled(Container)`
    background-color: #DABFE3;

`

export const BenefitsCol = styled(Col)`
    text-align: center;
    color:#555ea0;
`
export const IconCircle = styled.div`
    align-items: center;
    background: white;
    border-radius: 50%;
    display: flex;
    height: 3rem;
    justify-content: center;
    margin: 1rem auto;
    text-align: center;
    width: 3rem;
`