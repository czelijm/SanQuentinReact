import styled from 'styled-components';
export const BackgroundImage = styled.img`
    opacity: 0.5;
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
