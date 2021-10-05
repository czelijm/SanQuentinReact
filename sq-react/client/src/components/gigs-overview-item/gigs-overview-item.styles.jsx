import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Button from '../button/button.component';


export const GigsOverviewItemComponent = styled.div`
    border-color:#da1b2b;
    border-style:solid;
    border-width:2px;
    border-radius:4px;
    margin-top:2%;

    overflow: hidden;
    position: relative;
`;

export const BackgroundImage = styled.img`
    opacity: 0.3;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    /* height: 100%; */
    background-size: cover;
    @media only screen and (max-width: 991px){
        height: 100%; 
    }
`;



export const GigTitle = styled.h2`
    @media only screen and (min-width: 992px){
        /* position:absolute; */
        /* top:25%; */
        padding:2px;
    }
    @media only screen and (max-width: 991px){
        display:flex;
        justify-content: center;
        align-items: center;
        margin-bottom:5%;
    }
`;

export const GigImage = styled.img`
    width:65%;
    border-radius:2px;
`;


export const ImageDiv = styled.div`
    display:flex;
    justify-content:center;
`;

export const GigDescriptionDiv = styled.div`
`;


export const GigDescriptionElement = styled.p`

    /* @media only screen and (min-width: 992px){
        padding:0 !important;
        position:absolute;
        top:40%;
    } */

    @media only screen and (max-width: 991px){
        display:flex;
        justify-content: center;
        align-items: center;
        text-align:center;
    }
    /* left:50%; */
`;

export const ButtonDiv = styled.div`
        height:100%;
        display: flex !important;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: column;
        align-content: center;
`;

export const DetailsButton = styled(Button)`
    /* width:10%; */  
    /* @media only screen and (min-width: 992px){ */
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-content: center;
    /* } */

`;

export const ColImage = styled(Col)`
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
`;

export const RowStyled = styled(Row)`
    @media only screen and (min-width: 992px){
        align-items: center !important;
    }
`;