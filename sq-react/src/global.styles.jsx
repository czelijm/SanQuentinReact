import {createGlobalStyle} from 'styled-components';
import Cleanwork from './assets/Cleanwork.ttf';

export const GlobalStyle = createGlobalStyle`
    body{
        background-color: #121317;
        ${'' /* background-color: #2b303a; */}
        color: #f2fdff;
        padding: 20px 60px;
        ${'' /* font-family: 'Open Sans Condensed', sans-serif; */}
        ${'' /* color: #da1b2b; */}
        ${'' /* height: 100vh;
        width: 100vw; */}
        
        @media screen and (max-width:800px){
        padding: 0;
        /* margin-bottom: 20px; */
        }
    }
    a{
        text-decoration: none;
        color:#f2fdff;
    }
    html, body, #root, .App {
        ${'' /* height: 100vh; */}
        ${'' /* width: 100vw; */}
    }

    @font-face {
        font-family: 'Cleanwork';
        src: url(${Cleanwork});
    }

`



