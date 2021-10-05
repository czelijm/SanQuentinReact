import styled from 'styled-components';
import {Col, Row} from 'react-bootstrap'

export const BandMemberBioStyled = styled.div`
    margin-top:2%;
    padding:2%;
`;
export const BandMemberBioDescriptionContainer = styled.div`
    border-radius:2px;
    padding:10px;
    /* border-color:#da1b2b; */
    border-color:grey;
    border-style:solid;
    border-width:2px;

    overflow: hidden;
    position: relative;
`;
export const BandMemberTitle = styled.h3`
    /* justify-content:center; */
    background-color:rgba(0, 0, 0, 0.7);
    text-align:center;
    width:100%;

    border-color:#da1b2b;
    /* border-color:white; */
    border-style:solid;
    border-width:2px;
    
    /* padding:3%; */
    padding:10px;
    font-size:2.75rem;
    border-radius:2px;
`;
export const BandMemberDescription = styled.p`
    /* justify-content:center; */
    padding:10px;
    /* background-color:rgba(0, 0, 0, 0.7); */
    width:100%;
    /* height:420px; */
    text-align:left;
    font-size:1.75rem;
    border-radius:2px;
    
`;
export const BandMemberImage = styled.img`
    height: 620px;
    width: 100%;
    /* object-fit: cover; */
    object-fit: none;
    border-radius:3px;
    /* -webkit-background-size: cover;
    background-size: cover; */
    /* overflow:visible; */
`;
export const BandMemberImageDiv = styled.div`
    background-image: url(${props => props.src});
    /* overflow:visible; */
    height: 650px;
    width: 100%;
    object-fit: cover;
    border-radius:3px;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
`;

export const DescriptionDiv = styled.div`
    /* margin-top:5%; */
    justify-content:right;
    text-align:right;
    border-color:#da1b2b;
    /* border-color:white; */
    border-style:solid;
    border-width:2px;
    /* padding:0% 3%; */
    background-color:rgba(0, 0, 0, 0.7);
`;

export const ImageCol = styled(Col)`
    width:100%;
    height:100%;
`;
export const InfoCol = styled(Col)``;
export const BioRow = styled(Row)`

`;





// export const MemberBioContainer = styled.div``;
