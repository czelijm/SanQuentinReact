import styled from 'styled-components';
import Color from 'color';
import Lightbox from 'react-spring-lightbox'

export const GalleryContainer = styled.section`
    overflow-y: auto;
    max-height: calc(100% - 4em);
    padding: 2em;
`;

export const LightboxStyled = styled(Lightbox)`
    background: ${({ theme }) =>
        Color(theme.accentColor).alpha(0.95).hsl().string()};
    * ::selection {
        background: ${({ theme }) => theme.pageContentSelectionColor};
    }
    * ::-moz-selection {
        background: ${({ theme }) =>
            new Color(theme.pageContentSelectionColor).darken(0.57).hex()};
    }
`;

export const ImageOverlay = styled.div`
    position: absolute;
    top: 0%;
    right: 0%;
    border: ${({ theme }) => theme.pageContentSelectionColor} 1px solid;
    background: rgba(39, 39, 39, 0.5);
    p {
        color: ${({ theme }) => theme.pageContentSelectionColor};
        text-align: center;
        font-weight: bold;
        font-size: 1.2em;
        margin: 0.5em 0;
    }
    svg {
        border: white 1px solid;
        fill: ${({ theme }) => theme.pageContentSelectionColor};
        margin: 10px;
        padding: 5px;
        :hover {
            border: ${({ theme }) => theme.pageContentSelectionColor} 1px solid;
            fill: ${({ theme }) =>
                new Color(theme.pageContentSelectionColor).darken(0.57).hex()};
            cursor: pointer;
        }
    }
`;
