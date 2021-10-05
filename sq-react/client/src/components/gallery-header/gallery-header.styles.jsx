import styled from 'styled-components'
import Color from 'color';
import GalleryButton from '../gallery-button/gallery-button.component';

export const GalleryHeading = styled.h2`
    margin: 0 0 5px 0;
    font-weight: normal;
`;

export const GallerySubheading = styled.h4`
    margin: 0;
    font-weight: normal;
    color: ${({ theme }) => theme.pageContentLinkHoverColor};
`;

export const PageIndicator = styled.span`
    white-space: nowrap;
    min-width: 60px;
    text-align: center;
`;

export const RightSideContainer = styled.div`
    width: 117px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CloseButton = styled.button`
    z-index: 10;
    background: none;
    border-style: none;
    font-size: 50px;
    cursor: pointer;
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.pageContentFontColor};
    transition: color 0.2s linear;
    :hover {
        color: ${({ theme }) => theme.pageContentLinkHoverColor};
    }
    :focus {
        outline: none;
        color: ${({ theme }) => theme.pageContentLinkHoverColor};
    }
    height: 100%;
    display: flex;
    /* border-left-style: solid;
    border-left-width: 3px;
    border-left-color: ${({ theme }) => theme.headerNavFontColor}; */
`;

export const LeftSideDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* border-left-width: 3px;
    border-left-color: ${({ theme }) => theme.pageContentLinkHoverColor};
    border-left-style: solid; */
    padding: 8px 0 8px 10px;
`;

export const TopHeaderBar = styled.header`
    z-index: 10;
    cursor: auto;
    display: flex;
    justify-content: space-between;
    padding: 10px 2px 10px 20px;
    color: ${({ theme }) => theme.headerNavFontColor};
    background-color: ${({ theme }) =>
        Color(theme.pageBackgroundColor).alpha(0.5).hsl().string()};
    > * {
        height: inherit;
    }
`;