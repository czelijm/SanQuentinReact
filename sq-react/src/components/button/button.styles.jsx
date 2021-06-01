import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const ButtonCustom = styled.button`
    background-color: #da1b2b;
    padding:4px 15px;
    border-color:#121317;
    border-style:solid;
    border-radius:2px;
    border-width:1px;
    font-size:1.25rem;
    color:#f2fdff;
    

    &:hover {
      background-color: #121317;
      text-decoration:none;
      color: #da1b2b;
      border-color:#da1b2b;
    }

    @media only screen and (max-width: 991px){
      width:100%;
    }

`;

export const ButtonLink = styled(Link)`
  text-decoration:none;
  &:hover {
      text-decoration:none;
    }
`;

export const ButtonContainer = styled.div`
    background-color: #da1b2b;
    padding:2px 5px;
    border-color:#121317;
    border-style:solid;
    border-radius:2px;
    border-width:1px;
    font-size:1.25rem;
    color:#f2fdff;
    text-align:center;

    &:hover {
      background-color: #121317;
      text-decoration:none;
      color: #da1b2b;
      border-color:#da1b2b;
    }
`;
