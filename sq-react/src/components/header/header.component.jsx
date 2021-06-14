import React from 'react';
//import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';
import {LogoStyled, NavStyled, NavbarStyled, NavDropdownStyled, NavDropdownItemStyled, HeaderContainer,HiddenLogo,MobileLogoContainer} from './header.styles';

// import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

import { ReactComponent as Logo  } from '../../assets/logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';  
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';

// const HeaderComponentTest = () => (
//     <HeaderContainer>
//         <LogoContainer to='/'>
//             <Logo className='logo' style ={{width:'100%', height:'100%'}}/>
//         </LogoContainer>
//         <OptionsContainer>
//             <OptionLink to='news'>Newsy</OptionLink>
//             <OptionLink to='gigs'>Koncerty</OptionLink>
//             <OptionLink to='band'>Zespół</OptionLink>
//         </OptionsContainer>

//     </HeaderContainer>
// )

const Header = () => (
    <HeaderContainer>
        <NavbarStyled style={{color:'white'}} variant='dark' expand="lg">
                <NavbarStyled.Brand href="/"> <LogoStyled className='logo'/></NavbarStyled.Brand>
            {/* <MobileLogoContainer>
                <NavbarStyled.Brand href="/"> <LogoStyled className='logo'/></NavbarStyled.Brand>
                <NavbarStyled.Brand style={{padding:'0'}} href="/"> <HiddenLogo className='logo'/></NavbarStyled.Brand>
            </MobileLogoContainer> */}
                <NavbarStyled.Toggle aria-controls="basic-navbar-nav" />
                <NavbarStyled.Collapse  id="basic-navbar-nav">
                    <NavStyled className="mr-auto">
                        <NavStyled.Link href="/news">Newsy</NavStyled.Link>
                        <NavStyled.Link href="/gigs">Koncerty</NavStyled.Link>
                        {/* <NavStyled.Link href="/band">Zespół</NavStyled.Link> */}
                        <NavDropdownStyled style={{color:'red'}} title="San Quentin" id="basic-nav-dropdown">
                            <NavDropdownItemStyled href="/band">Zespół </NavDropdownItemStyled>
                            <NavDropdownItemStyled href="#action/3.2">Galeria</NavDropdownItemStyled>
                            <NavDropdownItemStyled href="#action/3.2">Video</NavDropdownItemStyled>
                            <NavDropdownItemStyled href="#action/3.2">Dyskografia</NavDropdownItemStyled>
                            {/* <NavDropdownItemStyled href="#action/3.2">Dyskografia</NavDropdownItemStyled> */}
                            {/* <NavDropdownItemStyled href="#action/3.3">Something</NavDropdownItemStyled> */}
                            {/* <NavDropdownStyled.Divider /> */}
                            {/* <NavDropdownItemStyled href="#action/3.4">Separated link</NavDropdownItemStyled> */}
                        </NavDropdownStyled>

                        <NavStyled.Link href="/contact">Kontakt</NavStyled.Link>
                    </NavStyled>
                </NavbarStyled.Collapse>
        </NavbarStyled>
        
    </HeaderContainer>
)

export default Header;