import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo  } from '../../assets/SQ_RED.svg'; 
import { ReactComponent as LogoHidden  } from '../../assets/logo.svg'; 

import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
`
const NavItemColor = css`
    ${'' /* background-color:#f2fdff; */}
    background-color:#da1b2b;
    color:#f2fdff;

    @media screen and (max-width:991px){
        background-color:#121317;
    }
`;


export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    background-color:#121317;
    z-index:1;
    @media screen and (max-width:991px){
        padding: 10px;
        height: 60px;
        margin-bottom: 20px;
    }
`

export const MobileLogoContainer  = styled.div`
    @media screen and (max-width:991px){
    display:flex;
    width:90%;
    justify-content: space-between; 
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 0px;
    @media screen and (max-width:991px){
        padding: 0px;
        width: 50px;
        /* margin-bottom: 20px; */
    }
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width:991px){
        /* padding: 0px; */
        width: 10%;
        /* margin-bottom: 20px; */
    }
`

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`

export const LogoStyled = styled(Logo)`
    /* width:300px; */
    /* height:100px; */
    width: auto;
    height:25px;
    @media screen and (max-width:991px){
        /* padding: 0px; */
        width: auto;
        height:25px;
        /* margin-bottom: 20px; */
    }
`;

export const NavbarStyled = styled(Navbar)`
    background-color:#121317;
    position: fixed;
    z-index:1;
    top: 0;
    width:100%;

    @media screen and (min-width:992px){
        padding-top:30px;
        padding-bottom:10px;
    }

    @media screen and (max-width:991px){
        /* padding: 0px; */
        /* position: block; */
        left: 0;
        /* margin-bottom: 20px; */
    }
    /* margin-bottom:30px; */
    /* height:100px; */
    /* background-color:red; */
`;
export const HiddenLogo = styled(LogoHidden)`

    @media screen and (min-width:992px){
        display:none;
    }

    @media screen and (max-width:991px){
        /* padding: 0px; */
        /* position: block; */
        display:block;
        height:50px;
        /* margin-bottom: 20px; */
    }
    /* margin-bottom:30px; */
    /* height:100px; */
    /* background-color:red; */
`;

export const NavStyled = styled(Nav)`
    /* width:300px; */
    /* height:100px; */
    /* background-color:red; */
    /* position: fixed; */
    /* top: 0;
    width: 100%; */
`;


export const NavbarCollapseStyled = styled(Navbar.Collapse)`
    /* width:300px; */
    /* height:100px; */
    /* background-color:red; */
`;

export const NavDropdownStyled = styled(NavDropdown)`
    /* width:300px; */
    /* height:100px; */
    /* background-color:red; */
    .show{
        ${NavItemColor}
    }
`;

export const NavDropdownItemStyled = styled(NavDropdown.Item)`
    /* width:300px; */
    /* height:100px; */
    ${NavItemColor}
    
`;




