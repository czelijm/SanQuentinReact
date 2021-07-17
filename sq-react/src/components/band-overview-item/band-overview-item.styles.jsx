import styled from 'styled-components';

export const BandOverviewItemComponent = styled.div`

`;

export const BandTitle = styled.h2``;

export const BandImage = styled.img`
    width:50%;
    justify-self: center;
    border-color:#da1b2b;
    border-style:solid;
    border-width:2px;
`;

export const BandInnerImage = styled.img``;

export const BandDescriptionDiv = styled.div``;

export const BandDescriptionElement = styled.p``;

export const styles = {
    card: {
      margin: "0 20px",
      "background-color":"#121317",
      "color":"#f2fdff",
      'border-color':'#da1b2b',
      'border-style':' solid solid',
      'width': '100%'
    },
    media: {
      height: 150,
      width: 'auto',
      "background-color":"#121317",
      '-webkit-background-size': 'cover',
      'background-size': 'cover'
    },
    content:{
      "background-color":"#121317",
      "color":"#f2fdff",
      // 'border-color':'#da1b2b',
      // 'border-style':'none solid solid',
      'border-width':'2px'
    },
    title:{
      // 'color':'#da1b2b',
      "font-weight": "bold"
    }
    
  };