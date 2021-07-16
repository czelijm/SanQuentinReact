import styled from 'styled-components';
import {Col, Row} from 'react-bootstrap'

export const BandMemberBioStyled = styled.div`
    margin-top:2%;
    padding:2%;
`;
export const BandMemberTitle = styled.h3`
    /* justify-content:center; */
    text-align:center;
    padding:3%;
    font-size:2.75rem;
`;
export const BandMemberDescription = styled.p`
    /* justify-content:center; */
    text-align:left;
    font-size:1.75rem;
`;
export const BandMemberImage = styled.img`
    height: auto;
    width: 100%;
    object-fit: cover;
    border-radius:3px;
    /* overflow:visible; */
`;

export const DescriptionDiv = styled.div`
    /* margin-top:5%; */
    justify-content:right;
    text-align:right;
    padding:0% 3%;
`;

export const ImageCol = styled(Col)`
    width:100%;
    height:100%;
`;
export const InfoCol = styled(Col)``;
export const BioRow = styled(Row)`

`;





// export const MemberBioContainer = styled.div``;
