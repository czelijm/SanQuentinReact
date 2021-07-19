import { createGlobalStyle } from "styled-components";

export const homePageStyles = {
    height:'100%',
    width: '100vw'
};

export const HomePageGlobalStyle = createGlobalStyle`
    html, body, #root, .App {
        height: 100vh;
        width: 100vw;
        padding: 0 !important;
    }
`