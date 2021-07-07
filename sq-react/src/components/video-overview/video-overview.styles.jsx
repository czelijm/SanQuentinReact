import styled from 'styled-components';


export const VideoOverviewCoponentStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(415px, 1fr));
`;

export const VideoOverviewComponentStyled = styled.div``;
export const IFrame = styled.iframe`
    margin-right:1%;
    margin-bottom:1%;
    border-width:1px;
    border-style:none;
    padding:1%;
    display: ${props=>props.displayValue};

    @media only screen and (max-width: 991px){
        padding:2%;
    }
`;