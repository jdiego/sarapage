import styled from 'styled-components';
import { Container, Col } from 'react-bootstrap';


export const SectionIntro = styled.section `
    background-color: #858CBC;
    color: white;
`
export const WaveContainer = styled.div`
    width: 100%;    
    overflow: hidden;
    background-color: #C1C7F3;
    z-index:2;
`    
export const Wave = styled.div`
    display: block;
    position: relative;
    height: 40px;   
    background: #858CBC;

    &:before {
        content: "";
        display: block;
        position: absolute;
        border-radius: 100%;
        width: 100%;
        height: 300px;
        background-color: #C1C7F3;
        right: -25%;
        top: 20px;
        
    }
      
    &:after {
        content: "";
        display: block;
        position: absolute;
        border-radius: 100%;
        width: 100%;
        height: 300px;
        background-color: #858CBC;
        left: -25%;
        top: -240px;

    }
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
    top: -50px;
    z-index:3;
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