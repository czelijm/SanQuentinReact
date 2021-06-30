import styled from 'styled-components';
import Button from '../button/button.component';


export const GigsOverviewItemComponent = styled.div`
    background-color:#2b303a;
    border-radius:4px;

`;

export const GigTitle = styled.h2`
    @media only screen and (min-width: 992px){
        position:absolute;
        top:25%;
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
`;


export const ImageDiv = styled.div`
    display:flex;
    justify-content:center;
`;

export const GigDescriptionDiv = styled.div`
`;


export const GigDescriptionElement = styled.p`

    @media only screen and (min-width: 992px){
        padding:0 !important;
        position:absolute;
        top:40%;
    }

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