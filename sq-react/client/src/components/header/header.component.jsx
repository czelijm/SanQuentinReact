import React from 'react';
//import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';
import {LogoStyled, NavStyled, NavbarStyled, NavDropdownStyled, NavDropdownItemStyled, HeaderContainer} from './header.styles';

// import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

// import { ReactComponent as Logo  } from '../../assets/logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';  
import SocialMediaBar from '../social-media-bar/social-media-bar.component';
import { Nav } from 'react-bootstrap';
// import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';

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
        <NavbarStyled collapseOnSelect style={{color:'white'}} variant='dark' expand="lg">
                <NavbarStyled.Brand href="/"> <LogoStyled className='logo'/></NavbarStyled.Brand>
            {/* <MobileLogoContainer>
                <NavbarStyled.Brand href="/"> <LogoStyled className='logo'/></NavbarStyled.Brand>
                <NavbarStyled.Brand style={{padding:'0'}} href="/"> <HiddenLogo className='logo'/></NavbarStyled.Brand>
            </MobileLogoContainer> */}
                <NavbarStyled.Toggle aria-controls="responsive-navbar-nav" />
                <NavbarStyled.Collapse className="justify-content-between" id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/news">Newsy</Nav.Link>
                        <Nav.Link href="/gigs">Koncerty</Nav.Link>
                        {/* <Nav.Link href="/band">Zespół</Nav.Link> */}
                        <NavDropdownStyled style={{color:'red'}} title="My i nasza muza" id="basic-nav-dropdown">
                            <NavDropdownItemStyled href="/band">Zespół </NavDropdownItemStyled>
                            <NavDropdownItemStyled href="/gallery">Galeria</NavDropdownItemStyled>
                            <NavDropdownItemStyled href="/video">Video</NavDropdownItemStyled>
                            <NavDropdownItemStyled href="/albums">Dyskografia</NavDropdownItemStyled>
                            <NavDropdownItemStyled href="/friends">Przyjaciele i kooperacje</NavDropdownItemStyled>
                            {/* <NavDropdownItemStyled href="#action/3.2">Dyskografia</NavDropdownItemStyled> */}
                            {/* <NavDropdownItemStyled href="#action/3.3">Something</NavDropdownItemStyled> */}
                            {/* <NavDropdownStyled.Divider /> */}
                            {/* <NavDropdownItemStyled href="#action/3.4">Separated link</NavDropdownItemStyled> */}
                        </NavDropdownStyled>
                        <Nav.Link href="/contact">Kontakt</Nav.Link>
                    
                    </Nav>
                    <NavStyled className='navHomePage'>
                        <Nav.Link><SocialMediaBar/></Nav.Link>
                        <Nav.Link href='https://czelijm.github.io/AboutMe/'><p>website by Marek Czelij</p></Nav.Link>
                    </NavStyled>

                </NavbarStyled.Collapse>
        </NavbarStyled>
        
    </HeaderContainer>
)

export default Header;