import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Col} from 'react-bootstrap';

export const NewsItemContainer = styled.div`
    background-color:#2b303a;
    /* padding-top: 1%; */
    /* padding-bottom: 1%; */
    padding: 1%;
    margin-top:2%;
    margin-bottom:1%;
    border-radius:4px;
    justify-content:space-between;
    /* position: relative; */
`;

export const NewsImage = styled.img`
    width: 18rem;
`;

export const NewsTitle = styled.h3`
    text-align:center;
    display:flex;
    justify-content:center;
    align-items: center;

`;

export const NewsDetailsButton = styled(Link)`
    background-color: #da1b2b;
    padding:5px;
    border-color:#121317;
    border-style:solid;
    border-radius:1px;
    border-width:1px;

    &:hover {
      background-color: #121317;
      text-decoration:none;
      color: #da1b2b;
      border-color:#da1b2b;
      
    }

`;

export const ImageContainer = styled.div`
    width: 20%;
`;

export const NewsDetailsTitleBox = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
    /* position: absolute;
    top: 50%;
    left: 50%; */
`;