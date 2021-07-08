import styled from 'styled-components';

export const Caption = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.accentColor};
    color: ${({ theme }) => theme.pageContentLinkHoverColor};
    h4 {
        text-align: center;
        margin: 1em 0;
    }
`;

export const OverlayContainer = styled.div`
    position: relative;
    height: 100%;
    overflow: hidden;
`;

export const ImageContainer = styled.div`
    display: block;
    position: absolute;
    cursor: pointer;
    border-width: 2px;
    border-color: transparent;
    border-style: solid;
    :hover {
        border-color: ${({ theme }) => theme.pageContentLinkHoverColor};
    }
`;

export const Image = styled.img`
    width: inherit;
    height: inherit;
    position: absolute;
`;