import styled from 'styled-components';

import SpinnerAbsolute from '../spinner/spinner.component';

export const VideoOverviewComponentStyled = styled.div``;
export const SpinnerDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: stretch;
    justify-content: center;
    align-items: center;
    padding:10%;
`;
export const SpinnerDescription = styled.p`
    display: flex;
    text-align:center;
    flex-direction: column;
`;

export const Spinner = styled(SpinnerAbsolute)`

    &:div{
        height: 2px !important;
    }
`;


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


