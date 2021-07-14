import styled from 'styled-components';

export const MoreSocialMediaStyledComponent=styled.div`
    display: contents;
    width:100%;
`;
export const MoreSocialMediaIconDiv=styled.div`
    /* background-color:grey; */
    /* width:100%; */
    /* display:grid; */
    display: grid;
  grid-template-columns: repeat(auto-fill, minmax(31px, 31px));
  /* grid-gap: .5rem; */
  align-items: flex-start;
`;
export const MoreMediaIcon=styled.div`
    border-style:solid;
    border-color:grey;
    border-width:1px;
    width:31px;
    display:inline-flex;
    padding:3px;
    margin:0;
    text-align:center;
    justify-content:center;
    border-radius:2px;
    cursor: pointer;
    /* font-size:larger; */
`;
export const Anchor = styled.a``;

export const PlatformIcon = styled.img`
    width:33px;
    height:auto;
    padding:5px;
    border-radius:100%;
    /* display:block; */
`;



