import styled, {css} from 'styled-components';
// import {Link} from 'react-router-dom';
import {Col,Row} from 'react-bootstrap';

import Button from '../button/button.component';

const ResponsiveSupport = css`
    @media only screen and (max-width: 991px){
        display:flex;
        justify-content: center;
        align-items: center;
    }
`

export const NewsItemContainer = styled.div`
    /* background-color:#2b303a; */
    border-color:#da1b2b;
    border-style:solid;
    border-width:2px;
    /* padding-top: 1%; */
    /* padding-bottom: 1%; */
    padding: 1%;
    margin-top:2%;
    margin-bottom:1%;
    border-radius:4px;
    /* display:inline-flexbox; */
    /* width:100%; */
`;

export const NewsImage = styled.img`
    width: 18rem;
`;

export const NewsTitle = styled.h3`
    ${ResponsiveSupport}
`;

export const NewsDetailsButton = styled(Button)`
    /* width:10%; */  
`;

export const ImageContainer = styled.div`
/* display:inline-flexbox; */
    /* width: 18rem;
    height:auto;
    margin:0;
    display:flex;
    padding: 10px; */
`;

export const NewsDetailsTitleBox = styled(Col)`
    /* margin-left:5%; */
    /* padding:0px; */
    /* position: absolute;
    top: 50%;
    left: 50%; */
`;

export const NewsDetailsImageBox = styled(Col)`
    /* margin-left:0;
    padding:0; */
    /* width: 18rem !important; */
    /* position: absolute;
    top: 50%;
    left: 50%; */
    ${ResponsiveSupport}
`;

export const NewsDetailsButtonBox = styled(Col)`
    /* margin-left:0; */
    /* padding:30px; */
    /* position: absolute;
    top: 50%;
    left: 50%; */
    ${ResponsiveSupport}
`;

export const NewsDetailsRow = styled(Row)`
    /* margin-left:0; */
    /* justify-content: space-between; */
    ${ResponsiveSupport}
`;