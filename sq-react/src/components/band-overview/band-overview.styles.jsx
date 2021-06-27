import styled from 'styled-components';

export const BandOverviewComponent = styled.div`
    /* width:35%; */
    justify-content: center;
    display:grid;
    /* grid-auto-columns: 60px; */
    /* grid-column:auto; */

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