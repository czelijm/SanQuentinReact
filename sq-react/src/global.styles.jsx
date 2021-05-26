import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        background-color: #2b303a;
        color: #f2fdff;
        padding: 20px 60px;
        ${'' /* font-family: 'Open Sans Condensed', sans-serif; */}
        ${'' /* color: #da1b2b; */}
    }
    a{
        text-decoration: none;
        color:#f2fdff;
    }
`



