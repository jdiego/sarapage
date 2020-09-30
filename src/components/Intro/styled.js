import styled from 'styled-components';
import { Section, Container } from '@bootstrap-styled/v4';


export const SectionIntro = styled(Section) `
    background-color: #858CBC;
    color: white;
`
export const Lead = styled.p `
    font-size: 2.0rem;
    line-height: 1.5;
    font-family: 'Comfortaa', cursive;
    text-align: justify;
    text-justify: inter-word;
`
export const Highlight = styled.span `
    background-color: rgb(218,191,227, 0.6);
    padding: 0.3rem;
    color: white;
`

export const Wrapper = styled(Container)`
    /* width: 100%; */
    /* height: 16.8rem; */
    background-color: #DABFE3;
    /* display: flex; */
`