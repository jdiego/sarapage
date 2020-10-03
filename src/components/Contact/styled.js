import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const SectionContact = styled.section`
    color: #DABFE3;
    padding: 25px 0;
    background: #858CBC;

`
export const ContactTitle = styled.h1 `
    font-size: 4.0rem;
    line-height: 0.5;   
    font-weight: bold;
    text-align: center;
`
export const ContactSubTitle = styled.h2 `
    font-size: 1.5rem;
    font-weight: bold;
`
export const ContactBox = styled.div`
    margin-bottom: 3rem;
    text-align: left;
`

export const ListIco = styled.ul`
    line-height: 2;
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
    span{
        color: #DABFE3;
        margin-right: 10px;
    }
`

export const SocialsList = styled.div`
    padding: 1.5rem 0;
    ul li {
        display: inline-block;
    }
`

export const ContactButton = styled(Button)`
    background-color: #DABFE3 !important;
    color: #FF3399 !important;
`