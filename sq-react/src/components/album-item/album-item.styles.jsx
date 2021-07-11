import styled from 'styled-components';

export const AlbumItemComponentStyled = styled.div`
    background-color:gray;
    display:inline-flex;
    flex-direction: column;
    margin-left:3%;
    margin-top:3%;
    @media only screen and (max-width: 991px){
        /* display:flex; */
        margin-left:0%;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content:  center;
        justify-content: center;
        align-items: center;
        /* padding: 3% !important; */
        /* margin-top:0%; */
    }
`;

export const Image = styled.img`
    width:320px;
    display:block;
`;

export const Title = styled.h2`
    display:block;
`;

