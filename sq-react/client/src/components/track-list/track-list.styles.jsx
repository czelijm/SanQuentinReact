import styled from 'styled-components';

export const TrackListStyledComponent = styled.div`
    border-color:#da1b2b;
    border-style:solid;
    border-width:2px;
    text-align:center;

    padding:1%;
    display:inline-flex;
    flex-direction: column;
    /* margin-left:3%; */
    margin-top:3%;
    border-radius:5px;
`;

export const TrackItem = styled.h4`
    
    /* border-bottom:solid;
    border-color:#da1b2b;
    border-width:2px; */
    padding:2px;
    cursor: pointer;
    :hover{
        background-color:red;
    }
`;