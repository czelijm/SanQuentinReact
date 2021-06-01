import styled from 'styled-components';
// import {Link} from 'react-router-dom';
import {Col,Row} from 'react-bootstrap';

import Button from '../button/button.component';

export const NewsItemContainer = styled.div`
    background-color:#2b303a;
    /* padding-top: 1%; */
    /* padding-bottom: 1%; */
    padding: 1%;
    margin-top:2%;
    margin-bottom:1%;
    border-radius:4px;
    /* display:flex; */
    /* justify-content:space-between; */
    /* position: relative; */
`;

export const NewsImage = styled.img`
    width: 18rem;
`;

export const NewsTitle = styled.h3`
    /* text-align:center; */
    /* display:flex; */
    /* justify-content:center;
    align-items: center; */
    @media only screen and (max-width: 991px){
        display:flex;
        justify-content: center;
        align-items: center;
    }

`;

export const NewsDetailsButton = styled(Button)`
    /* width:10%; */  
`;

export const ImageContainer = styled.div`
    width: 20%;
`;

export const NewsDetailsTitleBox = styled(Col)`
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    margin-left:0;
    /* position: absolute;
    top: 50%;
    left: 50%; */
`;

export const NewsDetailsImageBox = styled(Col)`
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    margin-left:0;
    /* position: absolute;
    top: 50%;
    left: 50%; */
    @media only screen and (max-width: 991px){
        display:flex;
        justify-content: center;
        align-items: center;
    }
`;

export const NewsDetailsButtonBox = styled(Col)`
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    margin-left:0;
    /* position: absolute;
    top: 50%;
    left: 50%; */
    @media only screen and (max-width: 991px){
        display:flex;
        justify-content: center;
        align-items: center;
    }
`;

export const NewsDetailsRow = styled(Row)`
    margin-left:0;
    /* justify-content: space-between; */
    @media only screen and (max-width: 991px){
        display:flex;
        justify-content: center;
        align-items: center;
    }
`;