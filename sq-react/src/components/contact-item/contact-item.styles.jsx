import styled from 'styled-components';

export const ContactsOverviewItemComponent = styled.div`
    @media only screen and (max-width: 991px){
        padding:10px;
    }
`;

export const InsideDiv = styled.div`
    @media only screen and (min-width: 992px){
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }
    text-align:center;
`;
export const InfoDiv = styled.div`

`;
export const SocialMediaDiv = styled.div`

`;
export const Anchor = styled.a`

`;
export const Icon = styled.img`
    padding:3px;
    width:31px;
    height:auto;
`;



export const ContactTitle = styled.h2``;

export const ContactImage = styled.img`
    border-radius:5px;
    @media only screen and (max-width: 991px){
        width:100%;
        height:auto;
    }
    
`;

export const ContactDescriptionDiv = styled.div``;

export const ContactDescriptionElement = styled.h3``;