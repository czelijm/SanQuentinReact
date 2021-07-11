import styled from 'styled-components';
import Button from '../button/button.component';

export const AlbumItemComponentStyled = styled.div`
    padding:1%;
    background-color:#2b303a;
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

export const DetailsButton = styled(Button)`
    /* width:10%; */  
    display:flex;
    align-self: center;
    width:100% !important;
`;
