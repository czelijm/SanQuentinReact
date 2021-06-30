import styled from 'styled-components';

export const BandOverviewComponent = styled.div`
    /* width:35%; */
    /* justify-content: center;
    justify-self:center;
     */
    display:grid;
    /* grid-auto-columns: 60px; */
    /* grid-column:auto; */
    text-align:center;
    grid-template-columns: repeat(4, 1fr);
    /* grid-auto-rows: minmax(50px, auto); */
    /* grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); */
    /* This is better for small screens, once min() is better supported */
    /* grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr)); */
    grid-gap: 1rem;
    /* This is the standardized property now, but has slightly less support */
    /* gap: 1rem */


    @media screen and (max-width:991px){
        justify-content: center;
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
        /* padding: 0px; */
        /* display:block; */
        /* margin-bottom: 20px; */
    }
` 


export const MobileImage = styled.img`
    display:block;
    width:100%;
    /* height:250px; */
`;

export const MobileTitle = styled.h2`
    color: black;
    -webkit-text-fill-color: red; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    font-size:2.5rem;
        
    /* height:250px; */
`;
export const MobileDescription = styled.p`
    /* color: black;
    -webkit-text-fill-color: white; */
    /* -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black; */
    /* font-size:2rem; */
    /* height:250px; */
`;

export const MobileCaptionDiv = styled.div`
    /* background-color:rgba(218, 27, 43, 0.5); */
    /* background-color:rgba(242, 253, 255, 0.2); */
    background-color:rgba(87, 97, 117, 0.2);
    padding:1%;
    border-radius:1%;
    /* opacity:0.7; */
    /* height:250px; */
`;
