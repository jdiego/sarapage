import styled from 'styled-components';
import { Container, Col } from 'react-bootstrap';


export const SectionIntro = styled.section `
    background-color: #858CBC;
    color: white;
`
export const Lead = styled.p `
    font-size: 2.0rem;
    line-height: 1.5;
    text-align: justify;
    text-justify: inter-word;
`
export const Wrapper = styled(Container)`
    background-color: #DABFE3;
    position: relative;
`

export const BenefitsCol = styled(Col)`
    text-align: center;
    overflow: auto;
    color:#555ea0;
`
export const IconCircle = styled.div`
    align-items: center;
    border-radius: 50%;
    display: flex;
    height: 3rem;
    justify-content: center;
    margin: 1rem auto;
    text-align: center;
    width: 3rem;
`