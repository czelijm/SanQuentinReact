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
    overflow: hidden;
    position: relative;
    padding:10px;
    border-radius:2px;
`;


export const SocialMediaDiv = styled.div`
    background-color:rgba(0,0,0,0.7);
    overflow: hidden;
    position: relative;
    padding:2px;
    border-radius:2px;
`;
export const Anchor = styled.a`

`;
export const Icon = styled.img`
    padding:3px;
    width:31px;
    height:auto;
    border-radius:100%;
`;



export const ContactTitle = styled.h2`
    background-color:rgba(0,0,0,0.7);
    overflow: hidden;
    position: relative;
    padding:5px;
    margin-bottom:0;
    border-radius:2px;
`;

export const ContactImage = styled.img`
    border-radius:5px;
    /* width:100%;
    height:auto; */
    @media only screen and (max-width: 991px){
        width:100%;
        height:auto;
    }
    
`;

export const ContactDescriptionDiv = styled.div`
    background-color:rgba(0, 0, 0, 0.7);
`;

export const ContactDescriptionElement = styled.h3`
    background-color:rgba(0,0,0,0.7);
    overflow: hidden;
    position: relative;
    padding:2px;
    margin-bottom:0;
    border-radius:2px;
`;