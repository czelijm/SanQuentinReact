import styled from 'styled-components';
import Button from '../button/button.component';

export const AlbumItemComponentStyled = styled.div`
    /* background-color:#2b303a; */
    border-color:#da1b2b;
    border-style:solid;
    border-width:2px;

    padding:1%;
    display:inline-flex;
    flex-direction: column;
    margin-left:3%;
    margin-top:3%;
    border-radius:5px;
    @media only screen and (max-width: 991px){
        /* display:flex; */
        margin-left:0%;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content:  center;
        justify-content: center;
        align-items: center;
        /* padding: 3% !important; */
        /* margin-top:0%; */
    }
`;

export const Image = styled.img`
    width:320px;
    display:block;
`;

export const PlatformIcon = styled.img`
    width:33px;
    height:auto;
    padding:5px;
    border-radius:100%;
`;

export const Title = styled.h2`
    display:block;
`;

export const StreamingMediaDiv = styled.div`
`;

export const ButtonDiv = styled.div`
    /* padding:5px; */
    padding-top:5px;
    width:100%;
`;

export const Anchor = styled.a`
`;

export const DetailsButton = styled.button`
    /* width:10%; */ 
    background-color: #da1b2b;
    padding:4px 15px;
    border-color:#121317;
    border-style:solid;
    border-radius:2px;
    border-width:1px;
    font-size:1.25rem;
    color:#f2fdff;
    width:75%;
    height:auto;
    text-align:center;

    &:hover {
      /* background-color: #121317;
      text-decoration:none;
      color: #da1b2b;
      border-color:#da1b2b; */
      background-color: #F4A4AB;
      text-decoration:none;
      color: #121317;
      border-color:#121317;
    }
    display:flex;
    align-self: center;
    justify-content: center;
    /* width:100% !important; */
`;
